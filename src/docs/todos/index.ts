import getTodos from "./getTodos";
import addTodo from "./addTodo";
import updateTodo from "./updateTodo";
import removeTodo from "./removeTodo";
import clearTodo from "./clearTodo";
import getTodoById from "./getTodoById";
export default {
    paths: {
        '/todos': {
            ...getTodos,
            ...getTodoById,
        },
        '/add-todo': {
            ...addTodo,
        },
      
        '/clear-todos': {
            ...clearTodo,
        },
        '/edit-todo': {
            ...updateTodo,
        },
        '/delete-todo': {
            ...removeTodo,
        },
    },
};