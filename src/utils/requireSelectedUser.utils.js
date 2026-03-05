import { selectUser } from "../use-cases/user/selectUser.usecase.js";

export const requireSelectedUser = async (state, propmt) => {
    if (!state.selectedUser) {
        console.log("Por favor selecionar USUÁRIO");
        await selectUser(state, prompt);
    }
    return state.selectedUser;
}