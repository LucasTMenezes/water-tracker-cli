import { styles } from "../../../utils/cli-styles.utils.js";

export const askUserWeight = async (prompt) => {
    const weight = await prompt(`\n${styles.dim}Qual o peso corporal (kg)?${styles.reset} `);

    return parseFloat(weight);
} 