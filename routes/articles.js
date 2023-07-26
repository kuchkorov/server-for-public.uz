import express from "express";
import { AddArticle, DeleteArticle, getArticleById, getArticles, updateArticle } from "../controllers/article.js";


const router = new express.Router();

router.get("/", getArticles)
router.get("/:id", getArticleById)
router.post("/", AddArticle)
router.delete("/:id", DeleteArticle)
router.put("/:id", updateArticle)

export default router;
