export default {
    delete: {
        tags: ['Todo CRUD operations'], 
        description: "Remove existing todo",
        operationId: "removeTodo", 
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
        responses: {
            "200": {
                description: "Todo was removed",
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

}