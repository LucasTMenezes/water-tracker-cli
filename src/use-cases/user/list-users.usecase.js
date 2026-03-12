import { state } from "../../state/app.state.js"
import { Result } from "../../utils/result.utils.js";

export const listAllUsers = async () => {
    const users = state.users;
    
    
    if (!users || users.length === 0) {
        console.log("Nenhum usuário cadastrado.")
        return
    }
        
    return Result.view("usersList", {
        users
    });
}