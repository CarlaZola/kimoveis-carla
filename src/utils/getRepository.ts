import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate, Schedule, User } from "../entities";

const userRepository: Repository<User> = AppDataSource.getRepository(User) 

const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

const realEstateRepository : Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

export {
    userRepository,
    categoryRepository,
    addressRepository,
    realEstateRepository,
    schedulesRepository
}