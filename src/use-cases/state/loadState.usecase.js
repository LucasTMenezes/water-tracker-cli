import { loadStateFromDisk } from "../../repositories/state.repository.js";
import { state } from "../../state/app.state.js";

export const loadStateUseCase = async () => {
    const persistedState = await loadStateFromDisk();
    
    Object.assign(state, persistedState);
}

