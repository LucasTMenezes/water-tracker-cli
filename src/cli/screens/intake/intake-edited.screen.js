import { styles } from "../../../utils/cli-styles.utils.js"

export const intakeEditScreen = ({ updatedProperty, intakeNewValue }) => {

    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
    
Consumo atualizado de acordo:

${styles.bold}${updatedProperty}${styles.reset}
${styles.dim}Para:${styles.reset} ${intakeNewValue}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}    
    `
}