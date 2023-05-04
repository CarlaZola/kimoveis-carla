import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Address } from "./address.entity";
import { Schedule } from "./schedules.entity";
import { Category } from "./categories.entity";

@Entity('real_estate')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({type: 'boolean', default: false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0})
    value: number | string

    @Column({type: 'int'})
    size: number 

    @CreateDateColumn({type: 'date'})
    createdAt: Date | string 

    @UpdateDateColumn({type: 'date'})
    updatedAt: Date | string | null | undefined

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category

}

export {
    RealEstate
}