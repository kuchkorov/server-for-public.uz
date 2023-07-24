import express from "express";
import { 
    Addjournal, 
    DeleteJournal, 
    getJournal, 
    getJournals, 
    updateJournal 
} from "../controllers/journal.js";

const router = new express.Router();

router.get("/", getJournals)
router.get("/:id", getJournal)
router.post("/", Addjournal)
router.delete("/:id", DeleteJournal)
router.put("/:id", updateJournal)

export default router;
