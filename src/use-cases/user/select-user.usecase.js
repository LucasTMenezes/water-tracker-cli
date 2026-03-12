import { saveStateToDisk } from "../../repositories/state.repository.js";
import { askUserSelection } from "../../cli/prompts/user/select-user.prompt.js";

import { Result } from "../../utils/result.utils.js";

export const selectUser = async (state, prompt) => {
    const users = state.users;

    const selectedUser = await askUserSelection(prompt, users);

    state.selectedUser = selectedUser;

    
    await saveStateToDisk(state);

    return Result.view("selectedUser", {selectedUser});

} 