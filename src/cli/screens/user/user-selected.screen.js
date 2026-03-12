import { styles } from "../../../utils/cli-styles.utils.js"

export const userSelectedScreen = ({ selectedUser }) => {


    return `
---------------------------------------

${styles.bold} Usuário selecionado:${styles.reset} ${selectedUser.name} - ${selectedUser.weight} kg

---------------------------------------`
}