import express from "express";
import PortfolioControllerUse from "../controllers/portfolio.controller.ts";
 
const PortfolioEndpoint = express.Router();


PortfolioEndpoint.get('/fetchPortfolioDataRouteName', async (req, res) => {
    try {
        const PC = new PortfolioControllerUse();
        const result = await PC.fetchPortfolioDataFunction();
        if(!result.workFlag) {
            res.status(404).json(result);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error in fetchPortfolioData Endpoint/Function, ", error);
        res.status(500).json({message:"Internal Server Error"});

    }
});

PortfolioEndpoint.post('/savePortfolioDataRouteName', async (req, res) => {
    try {
        const {data} = req.body;
        const PC = new PortfolioControllerUse();
        const result = await PC.updatePortfolioFunction(data);
        if(!result.workFlag) {
            res.status(400).json(result)
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error While Saving Porfolio Data (Endpoint/Function), ", error);
        res.status(500).json({workFlag:false, updatedData:null});
    }
});


export default PortfolioEndpoint;