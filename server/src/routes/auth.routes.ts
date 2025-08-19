import AuthControllerUse from '../controllers/auth.controller.ts';
import {generateToken} from '../Utility/generateToken.ts';
import express from 'express';
const AuthEndpoint = express.Router();




AuthEndpoint.post('/LoginRouteName', async (req, res) => {
    try {
        const {LoginCreds} = req.body;
        const AC = new AuthControllerUse();
        const result = await AC.LoginFunctionAuthUse(LoginCreds);
        if(!result.workFlag) {
            res.status(400).json({workFlag:false, message:"Account Login Failed"})
        } else {
            const token = generateToken({username:LoginCreds.username});
            res.cookie('authtoken', token, {
                sameSite:'none',
                httpOnly:true,
                secure:true,
                maxAge: 3600000
            });
            res.status(200).json({workFlag:true, message:"Login Successful"})
        }
    } catch (error) {
        console.error("Error While Loggin In (Endpoint/Function)", error);
        res.status(500).json({workFlag:false, message:"Internal Server Error"})
    }
});

export default AuthEndpoint;




