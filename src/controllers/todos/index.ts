import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";
import bcrypt from "bcrypt"
import { validate as isEmailValid } from 'email-validator';
import { log } from "console";

const defaultRoute =  async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({status: "success", message: "Welcome to the todo ts API by Fab, please use /api-docs for more details"});
    } catch (error){
        throw error
    }
}
const getTodos =  async (req: Request, res: Response): Promise<void> => {
    try{
        const todos: ITodo[] = await Todo.find()
        if(!todos){
            res.status(400).json({status:"fail", message: "No todos found"})
            return
        }
        res.status(200).json({ todos })
    } catch (error){
        res.status(5000).json({status: "fail", message: "internal server error"})
    }
}

const addTodo =  async (req: Request, res: Response): Promise<void> => {
    try{
        const body = req.body as Pick<ITodo, "firstname" | "lastname" | "email" | "password" | "age" | "status" >

        if(!body.firstname || !body.lastname || !body.email || !body.password || !body.age || body.status == null){
            res.status(401).json({
                status: "fail",
                message: "Please fill all fields"
            })
            return
        }

        if(!isEmailValid(body.email)){
            res.status(401).json({
                status: "fail",
                message: "Please enter a valid email"
            })
            return
        }

        if(body.password.length < 6){
            res.status(401).json({
                status: "fail",
                message: "Password must be at least 6 characters"
            })
            return
        }

        const newEmail = req.body.email;
        const existingEmails: ITodo[] = await Todo.find({ email: newEmail });
        
        if (existingEmails.length > 0) {
          res.status(401).json({
            status: "fail",
            message: "Email already exists",
          });
          return;
        }
        
        const hashedPassword = await bcrypt.hash(body.password, 10); // Hash the password

        const todo : ITodo = new Todo({
            firstname: body.firstname,
            lastname: body.lastname,
            email: newEmail,
            password: hashedPassword,
            age: body.age,
            status: body.status
        })

        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo[] = await Todo.find()
        res.status(201)
        .json( { status: "success", message: "Todo added", todo: newTodo, todos: allTodos})
    } catch (error) {
        res.status(5000).json({status: "fail", message: "internal server error"})
    }
}

const getTodoById =  async (req: Request, res: Response): Promise<void> => {
    try{
        const todo: ITodo | null = await Todo.findById(req.params.id)
        res.status(200).json({todo})
    }
    catch (error) {
        res.status(5000).json({status: "fail", message: "internal server error"})
    }
}


const updateTodo =  async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: ITodo[] | null =  await Todo.findByIdAndUpdate(
            { _id: id },
            body
        )

        if(!updateTodo){
         res.status(400).json({message: "Todo not found"})
         return
        }

        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        })
        } catch (error) {
            res.status(5000).json({status: "fail", message: "internal server error"})
        }
}

const deleteTodo =  async (req: Request, res: Response): Promise<void> => {
    try{
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        if(!deletedTodo){
            res.status(400).json({message: "Todo not found"})
            return
        }
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo deleted successfully",
            todo: deletedTodo,
            todos: allTodos,
        })
    } catch (error) {
        res.status(5000).json({status: "fail", message: "internal server error"})
    }
}

const clearTodos =  async (req: Request, res: Response): Promise<void> => {
    try{
        await Todo.deleteMany({})
        const remainingTodos: ITodo[] = await Todo.find()
        res.status(201).json({ status:"fail", message: "Todos cleared", todos: remainingTodos})
    }
    catch (error) {
        throw error
    }
}
export { defaultRoute, getTodos, addTodo, updateTodo, deleteTodo, getTodoById, clearTodos }