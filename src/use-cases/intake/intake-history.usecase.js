import { waterHistory } from "../../services/intake/water-history.service.js";
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { Result } from "../../utils/result.utils.js";

export const intakeHistory = async (state, prompt) => {

    const selectedUserId = await requireSelectedUser(state, prompt);

    const selectedUser = state.users.find(user => user.id === selectedUserId);

    if (!selectedUser) return;

    const history = waterHistory(state.intakes, selectedUser.id);
    const totalIntake = history.reduce((total, intake) => intake.amount + total, 0);

    return Result.view("intakeHistory", {
        history,
        totalIntake
    })
} 