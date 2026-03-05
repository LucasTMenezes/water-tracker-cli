export const waterHistory = (intakes, userId) => {
    return intakes
        .filter(intake => intake.userId === userId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }