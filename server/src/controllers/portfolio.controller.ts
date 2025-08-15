import Portfolio from "../models/portfolio.ts";
import { PortfolioDataType } from "../Types/portfolio.types.ts";


class PortfolioControllerUse {
    constructor() {

    }

    async updatePortfolioFunction(data:PortfolioDataType) {
        try {
            const updatedPortfolio = await Portfolio.findOneAndUpdate(
                {},
                {$set:data},
                {upsert:true, new:true}
            );

            return {workFlag:true, updatedData:updatedPortfolio};
        } catch (error) {
            console.error("Error While Updating Portfolio (function), ", error);
            return {workFlag:false, updatedData:null};
        }
    }


    async fetchPortfolioDataFunction() {
        try {
            const portfolioData = await Portfolio.find({});
            return {workFlag:true, data:portfolioData};
        } catch (error) {
            console.error("Error While Fetching PortfolioData (controller)", error);
            return {workFlag:false, data:[]};

        }
    }
};

export default PortfolioControllerUse;