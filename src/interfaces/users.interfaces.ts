import { z } from "zod"
import { readUsersSchemasResponse, userSchemaRequest, userSchemaResponse, updateUserSchemaRequest } from "../schemas/users.schemas"
import { DeepPartial } from "typeorm"


type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TAllUsersArrayResponse = z.infer<typeof readUsersSchemasResponse>

type TUserUpdateRequest = DeepPartial<TUserRequest>

export {
    TUserRequest,
    TUserResponse,
    TAllUsersArrayResponse,
    TUserUpdateRequest
}