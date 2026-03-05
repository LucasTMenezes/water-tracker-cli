import { saveStateToDisk } from "../../repositories/state.repository.js";

export const selectUser = async (state, prompt) => {
    const users = state.users;
    let allUsersListDisplay = ``;
    users.forEach((user, index) => allUsersListDisplay+= `${index + 1} - ${user.name} - ${user.weight} kg\n`);

    const input = await prompt(`${allUsersListDisplay}`);
    const index = Number(input - 1);

    if (isNaN(index) || !users[index]) {
        console.log("Comando inválido");
        return;
    };

    state.selectedUser = users[index];
    console.log("Usuário selecionado:", state.selectedUser.name);
    
    await saveStateToDisk(state);

} 