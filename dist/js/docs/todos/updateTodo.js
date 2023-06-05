"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    put: {
        tags: ["Todo CRUD operations"],
        description: "Edit existing todo",
        operationId: "updateTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
            },
        ],
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
                description: "Todo was updated.",
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
