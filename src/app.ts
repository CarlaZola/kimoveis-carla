import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleErrors } from "./errors"
import { userRoutes } from "./routes/users.routes"
import { loginRoutes } from "./routes/login.routes"
import { categoryRoutes } from "./routes/categories.routes"
import { realEstateRoutes } from "./routes/realEstate.routes"
import { schedulesRoutes } from "./routes/schedules.routes"


const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoryRoutes)
app.use('/realEstate', realEstateRoutes)
app.use('/schedules', schedulesRoutes)

app.use(handleErrors)

export default app