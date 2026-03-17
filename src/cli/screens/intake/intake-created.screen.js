import { styles } from "../../../utils/cli-styles.utils.js";

export const intakeCreatedScreen = ({ amount, selectedUser }) => {

    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Novo Consumo de Água${styles.reset}

${styles.dim}Consumo de${styles.reset} ${styles.bold}${amount} ml${styles.reset} ${styles.dim}de água adicionado para${styles.reset} ${styles.bold}${selectedUser.name}${styles.reset}.

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}`
} 
    