import readline from "readline";

import { state } from "./state/app.state.js";
import { loadStateUseCase } from "./use-cases/state/load-state.usecase.js";

import { pause } from "./utils/pause.utils.js";

import { screens } from "./cli/screen-registry.js";
import { mainMenuController } from "./cli/main-menu.controller.js";
import { usersMenuController } from "./cli/users-menu.controller.js";



// Loads data into memory
await loadStateUseCase(state);

const screenControllers = {
    mainMenu: mainMenuController,
    usersMenu: usersMenuController,
}

// Creates a readline interface to handle user input in the CLI
// The prompt helper converts rl.question (callback-based)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

const main = async () => {

    let currentScreen = "mainMenu";
    let running = true;

    while (running) {

        console.clear();

        const controller = screenControllers[currentScreen];

        const result = await controller(state, prompt);

        if (!result) continue;

        if (result.type === "exit") {
            running = false;
            console.log("\nSaindo da aplicação...");
            continue;
        }

        if (result.type === "navigate") {
            currentScreen = result.screen;
            continue;
        }

        if (result.type === "view") {
            const screen = screens[result.screen];

            if (!screen) {
                console.log("Tela não encontrada.");
                await pause(prompt);
                continue;
            }
            console.clear();
            console.log(screen(result.data));

            await pause(prompt);
            continue;
        }

        if (result.type === "message") {
            console.log(result.message);
            await pause(prompt);
        }
    }

    rl.close();
};

main();