import { dailySummary } from "../../services/intake/dailySummary.service.js";
import { requireSelectedUser } from "../../utils/requireSelectedUser.utils.js";

export const dailyIntakeProgress = async (state, prompt) => {

    const selectedUser = await requireSelectedUser(state, prompt);
    if (!selectedUser) return;
    const summary = dailySummary(state.intakes, selectedUser);

    const barLength = 33;
    const filled = Math.round((summary.percentage / 100) * barLength);
    const empty = barLength - filled;

    // formatting for command line interface
    const green = "\x1b[42m"; // fundo verde
    const white = "\x1b[47m"; // fundo branco
    const reset = "\x1b[0m"; // reset
    const bold = "\x1b[1m"; // bold text
    // -------------------------------------
    
    console.log(`
    ${bold}Resumo Diário${reset}

    Meta:      ${summary.goal} ml
    Consumido: ${summary.consumed} ml
    Restante:  ${summary.remaining} ml
                                       
    Progresso
    ${green + " ".repeat(filled) + white + " ".repeat(empty) + reset} ${summary.percentage}%
    `);


}