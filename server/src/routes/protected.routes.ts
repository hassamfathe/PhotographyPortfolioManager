


import { CustomRequest, verifyToken } from '..//middleware/TokenWork.ts';
import express from 'express';
const ProtectedEndpoint = express.Router();


ProtectedEndpoint.get('/protected-route-RouteName', verifyToken, async (req:CustomRequest, res) => {
    res.status(200).json({success:true});
});


export default ProtectedEndpoint;