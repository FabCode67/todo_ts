export default {
    get:{
        tags: ["Todo CRUD operations"], 
        description: "Get todo by id", 
        operationId: "getTodoById", 
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
            200: {
                descrption : "Todo was obtained",
                content: {
                    
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Todo", 
                        },
                    },
                
                },
            },
        },
    }
}