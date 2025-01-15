export const User = {
    createUser(id, name) {
        return { id, name, status: 'inactive' };
    },
    updateUser(id, ...user) {
        newUser = Object.assign({ id }, user);
        return newUser;
    }
};
