
import jwt from 'jsonwebtoken';


export interface CustomRequest extends Request {
    user?:any;
}


export const generateToken = (payload:Object) => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {expiresIn:'3h'})
}

