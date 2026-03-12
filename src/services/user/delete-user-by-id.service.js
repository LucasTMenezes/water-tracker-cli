export const deleteUserById = (users, userId) => {
    return users.filter(user => user.id !== userId);
}