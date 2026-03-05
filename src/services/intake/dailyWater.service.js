export const dailyWater = (intakes, userId) => {
    const today = new Date().toISOString().split('T')[0];
    return [...intakes].filter(intake => intake.userId === userId && intake.date.split('T')[0] === today).reduce((total, intake) => total + intake.amount, 0);

}