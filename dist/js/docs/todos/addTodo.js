"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    post: {
        tags: ["Todo CRUD operations"],
        description: "Add new todo",
        operationId: "addTodo",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Todo",
                    },
                },
            },
        },
        responses: {
            "200": {
                description: "Todo was added",
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
};
