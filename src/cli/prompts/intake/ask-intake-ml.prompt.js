import { styles } from "../../../utils/cli-styles.utils.js";

export const askIntake = async (prompt) => {
    const answer = await prompt(`\n${styles.dim}Informe quantidade em ml:${styles.reset} `);

    return parseFloat(answer);
}