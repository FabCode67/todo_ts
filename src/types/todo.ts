import { Document } from "mongoose";

export interface ITodo extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    age: number;
    status: boolean;
}
