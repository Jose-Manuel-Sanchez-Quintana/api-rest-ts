import { Router } from "express";
import { getFile } from "../controllers/upload";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";

const router = Router();

router.post('/', checkJwt, multerMiddleware.single('myfile'), getFile);

export {router};