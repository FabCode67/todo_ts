"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    delete: {
        tags: ["Todo CRUD operations"],
        description: "Clear all todos",
        operationId: "clearTodos",
        responses: {
            200: {
                description: "Todos were cleared",
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
