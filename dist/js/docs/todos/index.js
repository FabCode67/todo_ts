"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTodos_1 = __importDefault(require("./getTodos"));
const addTodo_1 = __importDefault(require("./addTodo"));
const updateTodo_1 = __importDefault(require("./updateTodo"));
const removeTodo_1 = __importDefault(require("./removeTodo"));
const clearTodo_1 = __importDefault(require("./clearTodo"));
const getTodoById_1 = __importDefault(require("./getTodoById"));
exports.default = {
    paths: {
        '/todos': Object.assign(Object.assign({}, getTodos_1.default), getTodoById_1.default),
        '/add-todo': Object.assign({}, addTodo_1.default),
        '/clear-todos': Object.assign({}, clearTodo_1.default),
        '/edit-todo': Object.assign({}, updateTodo_1.default),
        '/delete-todo': Object.assign({}, removeTodo_1.default),
    },
};
