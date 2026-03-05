import { addWater } from "../../services/intake/water.service.js";
import { saveStateUseCase } from "../state/saveState.usecase.js";
import { requireSelectedUser } from "../../utils/requireSelectedUser.utils.js";

export const createWater = async (state, prompt) => {

    const input = await prompt(`Informe quantidade em ml (Ex.: 220, 350, 500)`);
    const amount = Number(input);
    const selectedUser = await requireSelectedUser(state, prompt);

    if (!selectedUser || isNaN(amount)) {
        console.log("Comando inválido");
        return;
    }

    const newWater = addWater(selectedUser.id, amount);
    state.intakes.push(newWater);

    console.log(`Ingestão de ${amount} ml de água adicionada para ${selectedUser.name}.`);

    await saveStateUseCase(state);
    
}
