// @params intakes
// intakes array
// @params date (optional) 
// ISOstring of the date it wants.
// @params userId
// user.id


export const waterHistory = (intakes, date, userId) => {
    return intakes
        .filter(intake => intake.userId === userId && (date ? intake.date.slice(0, 10) === date : true))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }