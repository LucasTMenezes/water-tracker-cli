import { saveStateUseCase } from "../state/save-state.usecase.js";
import { deleteUserById } from "../../services/user/delete-user-by-id.service.js";
import { Result } from "../../utils/result.utils.js";
import { askUserSelection } from "../../cli/prompts/user/select-user.prompt.js";


export const deleteUser = async (state, prompt) => {
    const users = state.users;

    const userToDelete = await askUserSelection(prompt, users); 
  
    state.users = deleteUserById(users, userToDelete.id);

    await saveStateUseCase(state);
    
    return Result.view("userDeleted", {
        "name": userToDelete.name,
    })

}

