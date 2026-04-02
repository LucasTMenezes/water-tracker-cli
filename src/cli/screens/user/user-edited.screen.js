import { styles } from "../../../utils/cli-styles.utils.js";

export const userEditedScreen = ({ updatedProperty, userNewValue }) => {
    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
    
Usuário atualizado de acordo:

${styles.bold}${updatedProperty}${styles.reset}
${styles.dim}Para:${styles.reset} ${userNewValue}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}    
    `
}