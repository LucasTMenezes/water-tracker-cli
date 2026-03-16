import { styles } from "../../../utils/cli-styles.utils.js";

export const userCreatedScreen = ({ name, weight, dailyGoal }) => {

return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Usuário criado com sucesso${styles.reset}

${styles.dim}Nome:${styles.reset}        ${name}
${styles.dim}Peso:${styles.reset}        ${weight} kg
${styles.dim}Meta diária:${styles.reset} ${dailyGoal} ml

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
`;

};