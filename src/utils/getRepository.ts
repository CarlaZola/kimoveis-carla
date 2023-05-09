import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category, User } from "../entities";

const userRepository: Repository<User>          = AppDataSource.getRepository(User) 

const categoryRepository: Repository<Category>  = AppDataSource.getRepository(Category)

export {
    userRepository,
    categoryRepository
}