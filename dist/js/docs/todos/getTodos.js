"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    get: {
        tags: ["Todo CRUD operations"],
        description: "Get all todos",
        operationId: "getTodos",
        responses: {
            "200": {
                description: "Todos were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Todo",
                        },
                    },
                },
            },
        },
    },
    // put: {
    //     tags: ["Todo CRUD operations"],
    //     description: "Edit existing todo",
    //     operationId: "updateTodo",
    //     requestBody: {
    //         content: {
    //             "application/json": {
    //                 schema: {
    //                     $ref: "#/components/schemas/Todo",
    //                 },
    //             },
    //     },
    // },
    // responses: {
    //     "200": {
    // }
};
