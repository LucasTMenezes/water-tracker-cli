import { saveStateUseCase } from "../state/saveState.usecase.js";
import { deleteUserById } from "../../services/user/deleteUserById.service.js";

export const deleteUser = async (state, prompt) => {
    const users = state.users;

    let allUsersListDisplay = ``;
    users.forEach((user, index) => allUsersListDisplay+= `${index + 1} - ${user.name} - ${user.weight} kg - ${(user.dailyGoal / 350).toFixed(1)} copos por dia\n`);
    const input = await prompt(`Por favor, informe o número do usuário a ser deletado:\n${allUsersListDisplay}`);
    const index = Number(input) -1;
    
    if (isNaN(index || !users[index])) {
        console.log("Comando inválido");
        return
    }

    const selectedUser = users[index];

    state.users = deleteUserById(users, selectedUser.id);

    await saveStateUseCase(state);
              
    console.log(`Deletando ${selectedUser.name}`);

}

