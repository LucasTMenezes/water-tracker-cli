import readline from "readline";
import { createUserUseCase } from "./use-cases/user/createUser.usecase.js";
import { loadStateUseCase } from "./use-cases/state/loadState.usecase.js";
import { state } from "./state/app.state.js";
import { listAllUsers } from "./use-cases/user/listUsers.usecase.js";
import { deleteUser } from "./use-cases/user/deleteUser.usecase.js";
import { selectUser } from "./use-cases/user/selectUser.usecase.js";
import { createWater } from "./use-cases/intake/createWater.usecase.js";
import { dailyIntakeProgress } from "./use-cases/intake/dailyIntakeProgress.usecase.js";
import { intakeHistory } from "./use-cases/intake/intakeHistory.usecase.js";

import { setTimeout } from "timers/promises";

await loadStateUseCase(state);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const boldText = "\x1b[1m"; // bold text
const dimText = "\x1b[2m"; // dim text
const resetFormat = "\x1b[0m" // reset formatting

const main = async () => {

    const mainMenuScreen = `
----------------------------------
${boldText}ÁguaDaily™ CLI App${resetFormat} 
----------------------------------

${boldText}USUÁRIOS${resetFormat}
${dimText}1 - Criar novo usuário
2 - Editar usuário
3 - Deletar usuário
4 - Listar usuários
5 - Selecionar usuário ativo${resetFormat}

${boldText}INGESTÃO DE ÁGUA (usuário ativo)${resetFormat}
${dimText}6 - Registrar ingestão
7 - Editar ingestão
8 - Remover ingestão
9 - Listar ingestões do dia${resetFormat}

${boldText}PROGRESSO${resetFormat}
${dimText}10 - Ver progresso de hoje
11 - Ver histórico
12 - Ver estatísticas gerais${resetFormat}

${boldText}SISTEMA${resetFormat}
${dimText}13 - Resetar dados
0  - Sair${resetFormat}
    `;

    
    let isMenuOpen = true;


    while (isMenuOpen) {
        


        let opcao = (await prompt (mainMenuScreen)).trim();
        
        switch(opcao) {

            case "1":
                await createUserUseCase(state, prompt);
                break;

            // case "2":
            //     await editUser(state, prompt);
            //     break;

            case "3":
                await deleteUser(state, prompt);
                break;

            case "4":
                listAllUsers();
                break;
            

            case "5": 
                await selectUser(state, prompt);
                break;

            case "6":
                await createWater(state, prompt);
                break;

            case "10":1
            
                await dailyIntakeProgress(state, prompt);
                break;
            case "11":
                await intakeHistory(state, prompt);
                break;
            case "0": 
                console.log("Saindo do menu...");
                isMenuOpen = false;
                break;
            default: 
                console.log("Comando inválido.");
        }

        await setTimeout(5000);

    }

    

    rl.close();

}

main();