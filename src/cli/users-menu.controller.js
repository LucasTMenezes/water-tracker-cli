import { usersMenuScreen } from "./screens/menu/users.screen.js";
import { Result } from "../utils/result.utils.js";
import { createUserUseCase } from "../use-cases/user/create-user.usecase.js";
import { deleteUser } from "../use-cases/user/delete-user.usecase.js";
import { listAllUsers } from "../use-cases/user/list-users.usecase.js";
import { selectUser } from "../use-cases/user/select-user.usecase.js";
import { editUserUseCase } from "../use-cases/user/edit-user.usecase.js";

export const usersMenuController = async (state, prompt) => {

    const option = await prompt(usersMenuScreen(state));

    switch (option) {

        case "1":
            return await createUserUseCase(state, prompt);
        
        case "2":
            return await editUserUseCase(state, prompt);

        case "3":
            return await deleteUser(state, prompt);

        case "4":
            return await listAllUsers(state, prompt);
        
        case "5":
            return await selectUser(state, prompt);

        case "0":
            return Result.navigate("mainMenu");

        default:
            return Result.message("Comando inválido.");
    }
};