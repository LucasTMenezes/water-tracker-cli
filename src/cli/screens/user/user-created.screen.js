import { styles } from "../../../utils/cli-styles.utils.js";

export const userCreatedScreen = ({ name, weight, dailyGoal }) => {

return `
-----------------------------------------

${styles.bold}Usuário criado com sucesso!${styles.reset}

${styles.bold}Nome:${styles.reset} ${name}
${styles.bold}Peso:${styles.reset} ${weight} kg
${styles.bold}Meta diária:${styles.reset} ${dailyGoal} ml

-----------------------------------------
`;

};