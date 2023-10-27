import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrders } from "../services/orders";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";


const getItems = async (req:RequestExt, res:Response) => {
    try {
        
        res.send({
            data:"Only people with active session can see this ewe",
            user:req.user,
    });
    }catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};



export {getItems};