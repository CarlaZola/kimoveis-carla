import { z } from "zod";

const userSchemaRequest = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean()
})

const userSchemaResponse = userSchemaRequest
    .omit({password: true})
    .extend({
        id: z.number(),
        createdAt: z.string(),
        updatedAt: z.string().nullish(),
        deletedAt: z.string().nullish()
    })


export {
    userSchemaRequest, 
    userSchemaResponse
}