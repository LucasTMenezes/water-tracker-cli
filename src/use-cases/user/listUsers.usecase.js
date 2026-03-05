import { state } from "../../state/app.state.js"

export const listAllUsers = async () => {
    const users = state.users;

    if (!users || users.length === 0) {
        console.log("Nenhum usuário cadastrado.")
    }

    let listToConsole = ``;

    users.forEach((user, index) => {
        if (!user.name && !user.age) return;
        listToConsole += `${index + 1} - ${user.name} - ${user.weight}kg - ${(user.dailyGoal / 350).toFixed(2)} copos por dia  \n`;
    })
    
    console.log(listToConsole);
}