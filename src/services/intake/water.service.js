import { water } from "../../models/water.model.js"
import { gerarID } from "../../utils/id.utils.js";

export const addWater = (userId, amount) => {

    if (amount <= 0) {
        throw new Error("Quantidade inválida");
    }
    const id = gerarID();
    const date = new Date().toISOString();
    const newWater = water({ id, userId, amount, date});
    
    return newWater;
}