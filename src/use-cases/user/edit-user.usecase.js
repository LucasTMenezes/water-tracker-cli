import { askUserSelection } from "../../cli/prompts/user/select-user.prompt.js";
import { Result } from "../../utils/result.utils.js";
import { saveStateUseCase } from "../state/save-state.usecase.js";
import { askUserEdit } from "../../cli/prompts/user/ask-user-edit.prompt.js";

export const editUserUseCase = async (state, prompt) => {
    const users = state.users;

    const selectedUserId = await askUserSelection(prompt, users);

    state.selectedUser = selectedUserId;

    const edit = await askUserEdit(prompt);

    const updatedUser = {
        ...users.find(user => user.id === selectedUserId),
        [edit.property]: edit.newValue,
        [edit.property]: edit.newValue,
    };

    const userIndex = users.findIndex(user => user.id === selectedUserId);
    state.users[userIndex] = updatedUser;

    await saveStateUseCase(state);

    return Result.view("userEdited", {
        updatedProperty: edit.property === "weight" ? "Peso" : "Meta Diária",
        userNewValue: edit.property === "weight" ? `${edit.newValue} kg` : `${edit.newValue} ml`
    })

}