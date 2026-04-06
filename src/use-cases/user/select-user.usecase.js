import { saveStateToDisk } from "../../repositories/state.repository.js";
import { askUserSelection } from "../../cli/prompts/user/select-user.prompt.js";

import { Result } from "../../utils/result.utils.js";

export const selectUser = async (state, prompt) => {
    const users = state.users;

    const selectedUserId = await askUserSelection(prompt, users);

    state.selectedUser =  selectedUserId;
    
    const selectedUser = users.find(user => user.id === selectedUserId);

    await saveStateToDisk(state);

    return Result.view("selectedUser", { selectedUser });

} 