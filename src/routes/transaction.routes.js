import { Router } from "express";
import {
    addTransaction,
    getTransactions,
    getTransactionsByLoggedInUser,
    getTransactionsByProductOwner,
    updateStatusOrPayed,
} from "../controllers/transaction.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/add/:productId", verifyJWT, addTransaction);
router.get("/admin", getTransactions);
router.get("/user", verifyJWT, getTransactionsByLoggedInUser);

export default router;
