import { styles } from "../../../utils/cli-styles.utils.js";

export const userDeletedScreen = ({ name }) => {

return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.dim}Usuário ${styles.reset}${styles.bold}${name}${styles.reset}${styles.dim} deletado com sucesso${styles.reset}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

`;

};