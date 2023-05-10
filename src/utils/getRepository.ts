import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate, User } from "../entities";

const userRepository: Repository<User> = AppDataSource.getRepository(User) 

const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

const realEstateRepository : Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

export {
    userRepository,
    categoryRepository,
    addressRepository,
    realEstateRepository
}