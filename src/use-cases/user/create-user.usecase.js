import { saveStateUseCase } from "../state/save-state.usecase.js";
import { gerarID } from "../../utils/id.utils.js";
import { calculateGoalFromWeight } from "../daily-goals/calculate-goal-from-weight.usecase.js";
import { createUser } from "../../models/user.model.js";


import { Result } from "../../utils/result.utils.js";

import { askUserName } from "../../cli/prompts/user/ask-user-name.prompt.js";
import { askUserWeight } from "../../cli/prompts/user/ask-user-weight.prompt.js";

export const createUserUseCase = async (state, prompt) => {

    const id = gerarID();

    const name = await askUserName(prompt);
    const weight = await askUserWeight(prompt);

    const dailyGoal = calculateGoalFromWeight(weight);
    
    const newUser = createUser({ id, name, weight, dailyGoal });
    
    state.users.push(newUser);
    state.selectedUser = newUser;

    await saveStateUseCase(state);

    return Result.view("userCreated", {
        name,
        weight,
        dailyGoal
    });

}