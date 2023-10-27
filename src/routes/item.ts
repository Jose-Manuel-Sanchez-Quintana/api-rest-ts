import { Router, Response, Request } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

/*http://localhost:3002/items */
router.get('/:id', logMiddleware, getItem);
router.get('/', getItems);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };