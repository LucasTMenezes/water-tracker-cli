import { saveStateToDisk } from "../../repositories/state.repository.js";

export const saveStateUseCase = async (state) => {
    await saveStateToDisk(state);
}