import { styles } from "../../../utils/cli-styles.utils.js";

export const userDeletedScreen = ({ name }) => {

return `
-----------------------------------------
${styles.bold}Usuário ${name} deletado com sucesso!${styles.reset}
-----------------------------------------
`;

};