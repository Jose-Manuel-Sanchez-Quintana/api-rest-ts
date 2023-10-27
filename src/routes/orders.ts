import {Router} from 'express';
import { getItems } from '../controllers/orders';
import { checkJwt } from '../middleware/session';
/* Solo personas con session activa (que tengan un jwt valido) */
const router = Router();

router.get('/', checkJwt, getItems);

export {router};