function user(email,username){//? if it is invoked by new keyword then it's the constructor function.
    this.email=email;
    this.username=username;
    this.point=0;
} 

const user1=new user('shresthaprajwol161@gmail.com','prajwol');
console.log(user1)

user.prototype.login=()=>{
    console.log('user logged in')
}

user.prototype.logout=()=>{
    console.log('user logged out')
}

function adminUser(email,username,peopleReporting){
    user.apply(this,[email,username])
    this.peopleReporting=peopleReporting;
}


adminUser.prototype=Object.create(user.prototype)   

adminUser.prototype.updatePeopleReporting=(newNumber)=>{
    this.peopleReporting=newNumber;
}
adminUser.prototype.test=function(){
    console.log('hello from user')
}

adminUser.prototype.constructor = adminUser;

const admin=new adminUser('hello@gmail.com','ram shrestha','5');
console.log(admin)