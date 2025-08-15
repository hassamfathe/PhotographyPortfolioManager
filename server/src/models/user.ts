import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
    UserNameAttribute:String,
    PassWordAttribute:String,
    RoleAttribute:String,
});


const User = mongoose.model('User', userSchema);


export default User;