import { z } from "zod"
import { userSchemaRequest, userSchemaResponse } from "../schemas/users.schemas"


type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>


export {
    TUserRequest,
    TUserResponse
}