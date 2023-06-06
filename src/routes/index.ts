import { Router } from "express";
import {defaultRoute, getTodos, addTodo, updateTodo, deleteTodo, getTodoById, clearTodos } from "../controllers/todos";

const router : Router = Router()

// router.get("/", defaultRoute)
router.get("/todos", getTodos)
router.post("/add-todo", addTodo)
router.put("/edit-todo/:id", updateTodo)
router.delete("/delete-todo/:id", deleteTodo)
router.get("/todos/:id", getTodoById)
router.delete("/clear-todos", clearTodos)

export default router