import { saveStateUseCase } from "../state/saveState.usecase.js";
import { gerarID } from "../../utils/id.utils.js";
import { calculateGoalFromWeight } from "../daily-goals/calculateGoalFromWeight.usecase.js";
import { createUser } from "../../models/user.model.js";

export const createUserUseCase = async (state, prompt) => {
    const id = gerarID();
    const name = await prompt("Qual nome do novo usuário ?");
    const weight = parseFloat(await prompt("Qual o peso corporal (kg) ?"));
    const dailyGoal = calculateGoalFromWeight(weight);
    
    const newUser = createUser({ id, name, weight, dailyGoal });
    state.users.push(newUser);

    await saveStateUseCase(state);

    console.log(`
        Usuário ${name} criado com sucesso.
        Peso: ${weight}
        Total de Água recomendado: ${dailyGoal}
    `);

}