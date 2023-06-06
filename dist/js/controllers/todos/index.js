"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTodos = exports.getTodoById = exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const email_validator_1 = require("email-validator");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        if (!todos) {
            res.status(400).json({ status: "fail", message: "No todos found" });
            return;
        }
        res.status(200).json({ todos });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (!body.firstname || !body.lastname || !body.email || !body.password || !body.age || body.status == null) {
            res.status(401).json({
                status: "fail",
                message: "Please fill all fields"
            });
            return;
        }
        if (!(0, email_validator_1.validate)(body.email)) {
            res.status(401).json({
                status: "fail",
                message: "Please enter a valid email"
            });
            return;
        }
        if (body.password.length < 6) {
            res.status(401).json({
                status: "fail",
                message: "Password must be at least 6 characters"
            });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(body.password, 10); // Hash the password
        const todo = new todo_1.default({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashedPassword,
            age: body.age,
            status: body.status
        });
        const newTodo = yield todo.save();
        const allTodos = yield todo_1.default.find();
        res.status(201)
            .json({ status: "fail", message: "Todo added", todo: newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.addTodo = addTodo;
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todo_1.default.findById(req.params.id);
        res.status(200).json({ todo });
    }
    catch (error) {
        res.status(5000).json({ status: "fail", message: "internal server error" });
    }
});
exports.getTodoById = getTodoById;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        if (!updateTodo) {
            res.status(400).json({ message: "Todo not found" });
            return;
        }
        const allTodos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        res.status(5000).json({ status: "fail", message: "internal server error" });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield todo_1.default.findByIdAndRemove(req.params.id);
        if (!deletedTodo) {
            res.status(400).json({ message: "Todo not found" });
            return;
        }
        const allTodos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo deleted successfully",
            todo: deletedTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        res.status(5000).json({ status: "fail", message: "internal server error" });
    }
});
exports.deleteTodo = deleteTodo;
const clearTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield todo_1.default.deleteMany({});
        const remainingTodos = yield todo_1.default.find();
        res.status(200).json({ status: "fail", message: "Todos cleared", todos: remainingTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.clearTodos = clearTodos;
