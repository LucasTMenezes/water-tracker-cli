export const dailySummary = (intakes, user) => {
    const today = new Date().toISOString().slice(0, 10);

    const consumed = intakes
        .filter(intake => intake.userId === user.id && intake.date.slice(0, 10) === today)
        .reduce((total, intake) => total + intake.amount, 0);
    const goal = user.dailyGoal;

    console.log(consumed);

    return {
        goal, 
        consumed,
        remaining: goal - consumed,
        percentage: ((consumed / goal) * 100).toFixed(2)
    }
}