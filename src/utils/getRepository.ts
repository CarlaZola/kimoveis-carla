import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

const userRepository: Repository<User> = AppDataSource.getRepository(User) 


export {
    userRepository
}