import {Router} from 'express';
import offerRouter from './offerRoutes.js';
import userRouter from './userRoutes.js';


const router = new Router();

console.log("*****************", offerRouter);
console.log("@@@@@@@@@@@@@@@@@", userRouter);

router.use('/', offerRouter);
router.use('/', userRouter);

export default router;