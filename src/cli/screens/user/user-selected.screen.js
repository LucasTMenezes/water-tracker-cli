import { styles } from "../../../utils/cli-styles.utils.js"

export const userSelectedScreen = ({ selectedUser }) => {


    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.dim}Usuário selecionado:${styles.reset} ${selectedUser.name} - ${selectedUser.weight} kg

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}`
}