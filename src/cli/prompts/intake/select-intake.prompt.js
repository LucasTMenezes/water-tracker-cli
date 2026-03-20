import { styles } from "../../../utils/cli-styles.utils.js";
import { formatDateBR } from "../../../utils/date.utils.js";

export const askIntakeSelection = async (prompt, intakeHistory) => {

    if (!intakeHistory.length) {
        console.log("Nenhum consumo encontrado");
        return null
    }

    const historyDisplay = intakeHistory
        .map((intake, index) => `${styles.dim}${index + 1} -${styles.reset} ${formatDateBR(intake.date)}      ${intake.amount} ml`)
        .join("\n");

    
    // console.clear();

    const answer = await prompt(`
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Por favor, selecione o consumo que deseja editar:${styles.reset}

    ${styles.dim}Data            Qtd.${styles.reset}
${historyDisplay}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}        
    `);

    const selectedIndex = Number(answer - 1);

    if (selectedIndex < 0 || selectedIndex > intakeHistory.length) {
        console.log("Seleção inválida.")
        return null
    }
    return intakeHistory[selectedIndex];

    
}