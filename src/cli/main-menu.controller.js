import { createWater } from "../use-cases/intake/create-water.usecase.js";
import { dailyIntakeProgress } from "../use-cases/intake/daily-intake-progress.usecase.js";
import { intakeHistory } from "../use-cases/intake/intake-history.usecase.js";
import { createUserUseCase } from "../use-cases/user/create-user.usecase.js";
import { selectUser } from "../use-cases/user/select-user.usecase.js";
import { mainMenuScreen } from "./screens/menu/menu.screen.js";
import { Result } from "../utils/result.utils.js";

export const mainMenuController = async (state, prompt) => {

    const hasAnUser = state.users.length > 0;
    const option = await prompt(mainMenuScreen(state));

    switch (option) {
        case "1":
            if (!hasAnUser) {
                return await createUserUseCase(state, prompt);
            } else {
                return await createWater(state, prompt);
            };
            
        case "2":
            return await dailyIntakeProgress(state, prompt);
        
        case "3":
            return await intakeHistory(state, prompt);
        
        // case "4":
        //     return await intakeStatistics(state, prompt);
        
        case "5":
            return await selectUser(state, prompt);
        
        case "6":
            return Result.navigate("usersMenu");
        
        case "0":
            return Result.exit();

        default:
            return Result.message("Comando Inválido.");

    }
};