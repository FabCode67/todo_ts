import { ITodo } from "../types/todo";
import { model, Schema } from "mongoose"

const todoSchema : Schema = new Schema(
    {
        firstname:{
            type: String,
            required: true,
        },

        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },

        status : {
            type: Boolean,
            required: true,
            default : true
        },
    },
        {
            timestamps: true
        }
)

export default model<ITodo> ("Todo", todoSchema)