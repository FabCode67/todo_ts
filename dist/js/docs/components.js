"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    components: {
        schemas: {
            id: {
                type: "string",
                description: "An id of a todo",
                example: "tyVgf",
            },
            Todo: {
                type: "object",
                properties: {
                    id: {
                        $ref: "#/components/schemas/id",
                    },
                    firstname: {
                        type: "string",
                        description: "Todo's firstname",
                        example: "John",
                    },
                    lastname: {
                        type: "string",
                        description: "Todo's lastname",
                        example: "Doe",
                    },
                    email: {
                        type: "string",
                        description: "Todo's email",
                        example: "johndoe@example.com",
                    },
                    password: {
                        type: "string",
                        description: "Todo's password",
                        example: "password123",
                    },
                    age: {
                        type: "number",
                        description: "Todo's age",
                        example: 25,
                    },
                    status: {
                        type: "boolean",
                        description: "The status of the todo",
                        example: false,
                    },
                },
            },
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};
