import { z } from "zod";

const userSchemaRequest = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

const userSchemaResponse = userSchemaRequest
    .omit({password: true})
    .extend({
        id: z.number(),
        createdAt: z.string(),
        updatedAt: z.string(),
        deletedAt: z.string().nullish()
})

const readUsersSchemasResponse = z.array(userSchemaResponse)

const updateUserSchemaRequest = userSchemaRequest.omit({admin: true}).deepPartial()


export {
    userSchemaRequest, 
    userSchemaResponse,
    readUsersSchemasResponse,
    updateUserSchemaRequest
}