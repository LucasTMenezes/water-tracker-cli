import { waterHistory } from "../../services/intake/water-history.service.js"
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { askIntakeSelection } from "../../cli/prompts/intake/select-intake.prompt.js";
import { askIntakeEdit } from "../../cli/prompts/intake/select-edit-intake.prompt.js";
import { saveStateUseCase } from "../state/save-state.usecase.js";
import { formatDateBR } from "../../utils/date.utils.js";
import { Result } from "../../utils/result.utils.js";

export const editIntake = async (state, prompt) => {

    const activeUser = await requireSelectedUser(state, prompt);

    const intakeHistory = waterHistory(state.intakes, activeUser.id);

    const selectedIntake = await askIntakeSelection(prompt, intakeHistory);

    // gets an edit object from user prompt { property, newValue };
    const edit = await askIntakeEdit(prompt);

    const updatedIntake = {
        ...selectedIntake,
        [edit.property]: edit.newValue,
        [edit.property]: edit.newValue
    }

    
    const intakeIndex = state.intakes.findIndex(intake => intake.id === selectedIntake.id);
    state.intakes[intakeIndex] = updatedIntake;

    await saveStateUseCase(state);

    return Result.view("intakeEdited", {
        updatedProperty: edit.property === "amount" ? "Quantidade" : "Data",
        intakeNewValue: edit.property === "date" ? formatDateBR(edit.newValue) : `${edit.newValue} ml`
    })


}