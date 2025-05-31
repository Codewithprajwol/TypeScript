export const User={
    createUser(id,name){
        return {id,name,status:'inactive'}
    },
    updateUser(id,...user){
        newUser={id,...user}
        return newUser;
    }
}