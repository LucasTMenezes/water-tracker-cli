import { styles } from "../../../utils/cli-styles.utils.js";

export const askUserSelection = async (prompt, users) => {

    if (!users.length) {
        console.log("Nenhum usário cadastrado");
        return null
    }
    
    const list = users
    .filter((user) => user.name)
    .map((user, index) => `${index + 1} - ${user.name}`)
    .join("\n");
    
    console.clear();
    const answer = await prompt(`
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Por favor, selecione um usuário:${styles.reset}

${list}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}


Selecione opção: `);

    const selectedIndex = Number(answer) - 1;

    if (selectedIndex < 0 || selectedIndex >= users.legth) {
        console.log("Seleção inválida.");
        return null
    }

    return users[selectedIndex];
};