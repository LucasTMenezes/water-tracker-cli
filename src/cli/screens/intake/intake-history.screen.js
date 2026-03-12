import { styles } from "../../../utils/cli-styles.utils.js";
import { formatDateBR } from "../../../utils/date.utils.js";

export const intakeHistoryScreen = ({ history, totalIntake }) => {

    const historyDisplay = history
    .map((intake) => `${formatDateBR(intake.date)}      ${intake.amount} ml`)
    .join("\n");

    return `
---------------------------------------------------------------------------
${styles.bold}Histórico Completo${styles.reset}

${historyDisplay.length > 0 ?`
${styles.bold}Total${styles.reset}
${styles.dim}Ingestões:${styles.reset} ${history.length}    ${styles.dim}Ingerido:${styles.reset} ${totalIntake} ml
${styles.bold}Histórico de Consumos${styles.reset}

${styles.bold}Data            Qtd.${styles.reset}
${todayHistory}
`
    :
"Sem consumo registrado no momento.\nBeba água e registre o seu consumo. Você consegue!"
}
---------------------------------------------------------------------------`
};
