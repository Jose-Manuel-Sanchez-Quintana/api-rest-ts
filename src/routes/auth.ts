import { Router, Response, Request } from "express";
import {registerController, loginController} from "../controllers/auth"

const router = Router();


/* http://localhost:3002/auth/register [POST] */
router.post('/register', registerController);
router.post('/login', loginController);


export { router };