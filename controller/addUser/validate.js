const userNameValidator = function(userName){
    if(userName.length<3) return false;
    for(let i=0;i<userName.length;++i){
        if(userName[i]===' ') return false;
        code = userName.charCodeAt(i);
        if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            return false;
        }
    }
    return true;
}
const emailValidator = function(email){
    const pattern = /^\S+@\S+\.\S+$/
    return pattern.test(email)
}
const mobileNumberValidator = function(mobileNumber){
    let count = 0;
    if(typeof mobileNumber==='string') return false
    while(mobileNumber!==0){
        count++;
        mobileNumber=Math.floor(mobileNumber/10);
    }
    if(count===10) return true;
    return false;
}
const validate = function (userName,email,mobileNumber){
    const array = [1,1,1]
    if(!userNameValidator(userName)) array[0]=0;
    if(!emailValidator(email)) array[1]=0;
    if(!mobileNumberValidator(mobileNumber)) array[2]=0;
    return array;
}

module.exports = validate
