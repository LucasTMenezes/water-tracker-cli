import { styles } from "../../../utils/cli-styles.utils.js";
import { formatDateBR } from "../../../utils/date.utils.js";

export const intakeProgressScreen = ({ selectedUser, summary }) => {
    
    const barLength = 33;
    const filled = Math.round((summary.percentage / 100) * barLength);
    const empty = Math.max(barLength - filled, 0);
    const goalReachedMessage = summary.isGoalReached ? `${styles.bold}Meta atingida!${styles.reset}` : `${styles.bold}Vamos lá, você consegue!${styles.reset}`;

    const todayHistory = summary.todayHistory
    .map((intake) => `${formatDateBR(intake.date)}      ${intake.amount} ml`) 
    .join("\n");

    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Resumo Diário ${formatDateBR(new Date().toISOString())}${styles.reset}

${styles.dim}Usuário:${styles.reset}    ${selectedUser.name}${styles.reset}
${styles.dim}Meta:${styles.reset}       ${summary.goal} ml
${styles.dim}Consumido:${styles.reset}  ${summary.consumed} ml
${styles.dim}Restante:${styles.reset}   ${Math.max(summary.remaining, 0)} ml
                            
${styles.dim}Progresso:${styles.reset}
${styles.green + " ".repeat(filled) + styles.white + " ".repeat(empty) + styles.reset} ${summary.percentage} %

    ${goalReachedMessage}
${todayHistory.length > 0 ?`
${styles.dim}Histórico de Consumo:${styles.reset}

${styles.dim}Data            Qtd.${styles.reset}
${todayHistory}
`
    :
"\n"
}
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}`
};