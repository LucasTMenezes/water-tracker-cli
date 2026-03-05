import { waterHistory } from "../../services/intake/waterHistory.service.js";
import { requireSelectedUser } from "../../utils/requireSelectedUser.utils.js";
import { formatDateBR } from "../../utils/date.utils.js";

export const intakeHistory = async (state, prompt) => {

    const selectedUser = await requireSelectedUser(state, prompt);

    if (!selectedUser) return;

    const fullHistoryDesc = waterHistory(state.intakes, selectedUser.id);

    let display = `Data          Qtd.\n----------------------\n`;
    fullHistoryDesc.forEach((intake) => display += `${formatDateBR(intake.date)}    ${intake.amount} ml\n`);
    console.log(display);
} 