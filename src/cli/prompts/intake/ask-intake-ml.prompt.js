import { styles } from "../../../utils/cli-styles.utils.js";

export const askIntake = async (prompt) => {
    const answer = await prompt(`\n${styles.bold}Informe quantidade em ml:${styles.reset}\n`);

    return parseFloat(answer);
}