import { waterHistory } from "./water-history.service.js";

export const dailySummary = (intakes, user) => {
    const today = new Date().toISOString().slice(0, 10);

    const consumed = intakes
        .filter(intake => intake.userId === user.id && intake.date.slice(0, 10) === today)
        .reduce((total, intake) => total + intake.amount, 0);
    const goal = user.dailyGoal;

    const isGoalReached = consumed >= goal;
    
    const todayHistory = waterHistory(intakes, today, user.id);

    return {
        goal, 
        consumed,
        remaining: goal - consumed,
        percentage: ((consumed / goal) * 100).toFixed(2),
        isGoalReached,
        todayHistory
    }
}