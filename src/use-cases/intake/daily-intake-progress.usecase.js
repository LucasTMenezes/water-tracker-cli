import { dailySummary } from "../../services/intake/daily-summary.service.js";
import { requireSelectedUser } from "../../utils/require-selected-user.utils.js";
import { Result } from "../../utils/result.utils.js";

export const dailyIntakeProgress = async (state, prompt) => {

    const selectedUser = await requireSelectedUser(state, prompt);
    if (!selectedUser) return;

    const summary = dailySummary(state.intakes, selectedUser);

    return Result.view("intakeProgress", {
        selectedUser,
        summary
    })

}