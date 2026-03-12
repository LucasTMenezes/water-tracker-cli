import readline from "readline";

import { createUserUseCase } from "./use-cases/user/create-user.usecase.js";
import { loadStateUseCase } from "./use-cases/state/load-state.usecase.js";
import { state } from "./state/app.state.js";
import { listAllUsers } from "./use-cases/user/list-users.usecase.js";
import { deleteUser } from "./use-cases/user/delete-user.usecase.js";
import { selectUser } from "./use-cases/user/select-user.usecase.js";

import { createWater } from "./use-cases/intake/create-water.usecase.js";
import { dailyIntakeProgress } from "./use-cases/intake/daily-intake-progress.usecase.js";
import { intakeHistory } from "./use-cases/intake/intake-history.usecase.js";

import { pause } from "./utils/pause.utils.js";

import { screens } from "./cli/screen-registry.js";

import { mainMenuScreen } from "./cli/screens/menu/menu.screen.js";
import { mainMenuController } from "./cli/main-menu.controller.js";
import { usersMenuController } from "./cli/users-menu.controller.js";

await loadStateUseCase(state);


const screenControllers = {
    mainMenu: mainMenuController,
    usersMenu: usersMenuController,
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

// const handleResult = (result) => {

//     if (!result) return;

//     if (result.type === "message") {
//         console.log(result.message);
//         return;
//     }

//     if (result.type === "error") {
//         console.log(`Erro: ${result.message}`);
//         return;
//     }

//     if (result.type === "screen") {
//         const screen = screens[result.screen];

//         if (!screen) {
//             console.log("Tela não encontrada.");
//             return;
//         }

//         console.log(screen(result.data));
//     }
// };

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