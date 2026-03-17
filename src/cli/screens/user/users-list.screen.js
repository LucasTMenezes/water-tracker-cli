import { styles } from "../../../utils/cli-styles.utils.js";
export const usersListScreen = ({ users }) => {

    let list = users
    .filter(user => user.name)
    .map((user, index) =>
        `${index + 1} - ${user.name} - ${user.weight} kg - ${user.dailyGoal} ml`
    )
    .join("\n");

    return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Lista de Usuários${styles.reset}

${list}

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}`
};