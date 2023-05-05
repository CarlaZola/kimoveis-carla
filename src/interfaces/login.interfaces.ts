import { z } from "zod"
import { loginSchemaReponse, loginSchemaRequest } from "../schemas/login.schema"

type TLoginRequest = z.infer<typeof loginSchemaRequest>
type TLoginResponse = z.infer<typeof loginSchemaReponse>

export {
    TLoginRequest,
    TLoginResponse
}