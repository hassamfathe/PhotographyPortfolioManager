import User from "../models/user.ts";
import { LoginCreds } from "../Types/auth.types.ts";
import bcrypt from "bcryptjs";

class AuthControllerUse {
    constructor () {

    }

    async LoginFunctionAuthUse (creds:LoginCreds) {
        try {
            const foundUser = await User.findOne({UserNameAttribute:creds.UserNameParam});
            if(!foundUser) return {workFlag:false, username:null};
            const isAuthenticated = await bcrypt.compare(creds.PassWordParam, foundUser.PassWordAttribute || " ");

            if(!isAuthenticated) {
                return {workFlag:false, username:null};
            }
            return {workFlag:true, username:creds.UserNameParam};

        } catch (error) {
            console.error("Error While Logging In (function)", error);
            return {workFlag:false, username:null}
        }
    }
};

export default AuthControllerUse;