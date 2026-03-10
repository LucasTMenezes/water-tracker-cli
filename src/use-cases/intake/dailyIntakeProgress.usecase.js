import { isGoalReached } from "../../services/daily-goal-alert/goal-reached-service.js";
import { dailySummary } from "../../services/intake/dailySummary.service.js";
import { requireSelectedUser } from "../../utils/requireSelectedUser.utils.js";

export const dailyIntakeProgress = async (state, prompt) => {

    const selectedUser = await requireSelectedUser(state, prompt);
    if (!selectedUser) return;
    const summary = dailySummary(state.intakes, selectedUser);

    const barLength = 33;
    const filled = Math.round((summary.percentage / 100) * barLength);
    const empty = Math.max(barLength - filled, 0);

    // formatting for command line interface
    const green = "\x1b[42m"; // fundo verde
    const white = "\x1b[47m"; // fundo branco
    const reset = "\x1b[0m"; // reset
    const bold = "\x1b[1m"; // bold text
    // -------------------------------------
    
    const goalReached = isGoalReached(summary.consumed, selectedUser.dailyGoal);
    const goalReachedMessage = goalReached ? "\x1b[1;32mMeta atingida!\x1b[0m" : "\x1b[1mVamos lá, você consegue!\x1b[0m";
    
    console.log(`
    ----------------------------------------------
    ${bold}Resumo Diário${reset}

    Meta:      ${summary.goal} ml
    Consumido: ${summary.consumed} ml
    Restante:  ${Math.max(summary.remaining, 0)} ml
                                       
    Progresso
    ${green + " ".repeat(filled) + white + " ".repeat(empty) + reset} ${summary.percentage}%
    
    ${goalReachedMessage}
    ----------------------------------------------    
    `);


}