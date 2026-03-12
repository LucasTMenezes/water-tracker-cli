import { addWater } from "../../services/intake/water.service.js";
import { saveStateUseCase } from "../state/save-state.usecase.js";
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { askIntake } from "../../cli/prompts/intake/ask-intake-ml.prompt.js";
import { Result } from "../../utils/result.utils.js";

export const createWater = async (state, prompt) => {


    const selectedUser = await requireSelectedUser(state, prompt);

    const amount = await askIntake(prompt);
    
    const newWater = addWater(selectedUser.id, amount);
    
    state.intakes.push(newWater);

    await saveStateUseCase(state);

    return Result.view("intakeCreated", {
        amount,
        selectedUser
    });
};
