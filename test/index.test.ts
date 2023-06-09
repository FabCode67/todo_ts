import chai, { should } from "chai"
import chaiHttp from "chai-http"
import  app  from "../src/index"
import { expect } from "chai"
import mongoose from "mongoose"
import dotenv from "dotenv"
import ITodo from "../src/models/todo"

dotenv.config()

chai.use(chaiHttp)

describe("Testing the todo endpoints",()=>{
    it("should desplay welcome message on the home page",async()=>{
        const res = await chai.request(app).get("/")
        expect(res.status).to.equal(200)
        expect(res.body.status).to.equal("success")
        expect(res.body.message).to.equal("Welcome to the todo ts API by Fab, please use /api-docs for more details")
    })
})

describe("It shold add data to todo", () => {
    it("should return a 201 to clear model", async () => {
        const res = await chai.request(app).delete("/clear-todos")
        expect(res.status).to.equal(201)
        expect(res.body.message).to.equal("Todos cleared")
    })
    it("should return a 401 error if the user does not fill all fields", async () => {
        const res = await chai.request(app).post("/add-todo").send({
            firstname: "Fab",
            lastname: "Fabrice",
            email: "fabric@gmail.com",
            password: "fab!2Res",
        })
        expect(res.status).to.equal(401)
        expect(res.body.message).to.equal("Please fill all fields")
    })
    it("should return a 401 error if email provided is not valid", async () => {
        const res = await chai.request(app).post("/add-todo").send({
            firstname: "Fab",
            lastname: "Fabrice",
            email: "fabrice@gmail__com",
            password: "fab!2Res",
            age: 21,
        })
        expect(res.status).to.equal(401)
        expect(res.body.message).to.equal("Please enter a valid email")
    })
    it("should return a 401 error if password provided is not valid", async () => {
        const res = await chai.request(app).post("/add-todo").send({
            firstname: "Fab",
            lastname: "Fabrice",
            email: "fabrice@gmail.com",
            password: "faes",
            age: 21,
        })
        expect(res.status).to.equal(401)
        expect(res.body.message).to.equal("Password must be at least 6 characters")
    })
    it("should return a 201 todo added", async () => {
        const res = await chai.request(app).post("/add-todo").send({
            firstname: "Fab",
            lastname: "Fabrice",
            email: "fabricei@gmail.com",
            password: "faeFgDs2s",
            age: 21,
        })
        expect(res.status).to.equal(201)
        expect(res.body.message).to.equal("Todo added")
    })
    it("should return a 401 if email already exist", async () => {
        const res = await chai.request(app).post("/add-todo").send({
            firstname: "Fab",
            lastname: "Fabricea",
            email: "fabricei@gmail.com",
            password: "faeFgDs2s",
            age: 21,
        })
        expect(res.status).to.equal(401)
        expect(res.body.message).to.equal("Email already exists")
    })

    it("should return a 200 if todos are found", async () => {
        const res = await chai.request(app).get("/todos")
        expect(res.status).to.equal(200)
    })
    })      