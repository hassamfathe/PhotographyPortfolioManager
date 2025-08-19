import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export interface CustomRequest extends Request {
    user?:any;
}


export const verifyToken = (req:CustomRequest, res:Response, next:NextFunction) => {

    const token = req.cookies.BrvToken;

    if(!token) {
        res.status(401).json({success:false, message:"UnAuthorized"});
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err : VerifyErrors | null, decoded:JwtPayload | string|undefined) => {
        if(err) res.status(403).json({success:false, message:"Forbidden"})
        req.user = decoded;

    });
    next();
}