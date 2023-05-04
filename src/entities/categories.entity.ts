import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RealEstate } from "./real-estate.entity";


@Entity('categories')
class Category {

    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({type: 'varchar', length: 45, unique: true})
    name: string 

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate[]
}

export {
    Category
}
