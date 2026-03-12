import { askUserSelection } from "../cli/prompts/user/select-user.prompt.js";
import { selectUser } from "../use-cases/user/select-user.usecase.js";

export const requireSelectedUser = async (state, prompt) => {
    if (!state.selectedUser) {
        console.log("Por favor selecionar USUÁRIO");
        const selectedUser = await askUserSelection(prompt, state.users);
        return selectedUser;
        
    }
    return state.selectedUser;
}