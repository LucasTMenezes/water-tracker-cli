import { askUserSelection } from "../../cli/prompts/user/select-user.prompt.js";
import { Result } from "../../utils/result.utils.js";
import { saveStateUseCase } from "../state/save-state.usecase.js";
import { askUserEdit } from "../../cli/prompts/user/ask-user-edit.prompt.js";

export const editUserUseCase = async (state, prompt) => {
    const users = state.users;

    const selectedUser = await askUserSelection(prompt, users);

    state.selectedUser = selectedUser;

    const edit = await askUserEdit(prompt);

    const updatedUser = {
        ...selectedUser,
        [edit.property]: edit.newValue,
        [edit.property]: edit.newValue,
    };

    const userIndex = users.findIndex(user => user.id === selectedUser.id);
    state.users[userIndex] = updatedUser;

    await saveStateUseCase(state);

    return Result.view("userEdited", {
        updatedProperty: edit.property === "weight" ? "Peso" : "Meta Diária",
        userNewValue: edit.property === "weight" ? `${edit.newValue} kg` : `${edit.newValue} ml`
    })

}