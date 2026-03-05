import { dailyWater } from "../../services/intake/dailyWater.service.js";
import { requireSelectedUser } from "../../utils/requireSelectedUser.utils.js";

export const dailyIntakeProgress = async (state, prompt) => {

    const selectedUser = await requireSelectedUser(state, prompt);

    if (!selectedUser) return;

    const dailyProgress = dailyWater(state.intakes, selectedUser.id);

    const dailyProgressPercentage = ((dailyProgress / selectedUser.dailyGoal) * 100).toFixed(2);

    console.log(`Total ingerido hoje: ${dailyProgress} ml \n${dailyProgressPercentage} % da meta diária`);


}