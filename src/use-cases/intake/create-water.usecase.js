import { addWater } from "../../services/intake/water.service.js";
import { saveStateUseCase } from "../state/save-state.usecase.js";
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { askIntake } from "../../cli/prompts/intake/ask-intake-ml.prompt.js";
import { Result } from "../../utils/result.utils.js";

export const createWater = async (state, prompt) => {


    const selectedUserId = await requireSelectedUser(state, prompt);

    const amount = await askIntake(prompt);
    
    const selectedUser = state.users.find(user => user.id === selectedUserId);

    const newWater = addWater(selectedUser.id, amount);
    

    if (newWater === false){
        console.log("Erro ao adicionar nova ingestão de água.")
        return;
    } 

    state.intakes.push(newWater);

    await saveStateUseCase(state);

    return Result.view("intakeCreated", {
        amount,
        selectedUser
    });
};
