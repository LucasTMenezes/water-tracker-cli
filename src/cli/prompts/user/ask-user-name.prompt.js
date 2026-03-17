import { styles } from "../../../utils/cli-styles.utils.js";

export const askUserName = async (prompt) => {
    const name = await prompt(`\n${styles.dim}Qual o nome do usuário?${styles.reset} `);
    
    return name;
}