import { styles } from "./cli-styles.utils.js";

export const pause = async (prompt) => {
    await prompt(`\n${styles.dim}Pressione ENTER para voltar ao menu${styles.reset}`);
}