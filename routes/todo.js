import express from "express";

const router = express.Router();
import {
  editTodo,
  getTodo,
  postTodo,
  deleteTodo,
  deleteManyTodo,
} from "../controllers/todoss.js";

router.get("/gettodo", getTodo);
router.post("/addtodo", postTodo);
router.put("/edittodo/:id", editTodo); //Null
router.delete("/deletetodo/:id", deleteTodo); //Not workng
router.delete("/deletemany", deleteManyTodo);

export default router;
