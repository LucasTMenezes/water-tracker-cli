import { dailySummary } from "../../services/intake/daily-summary.service.js";
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { Result } from "../../utils/result.utils.js";

export const dailyIntakeProgress = async (state, prompt) => {

    const selectedUserId = await requireSelectedUser(state, prompt);
    const selectedUser = state.users.find(user => user.id === selectedUserId);
    
    if (!selectedUser) return;

    const summary = dailySummary(state.intakes, selectedUser);

    return Result.view("intakeProgress", {
        selectedUser,
        summary
    })

}