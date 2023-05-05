import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { Schedule } from "./schedules.entity";
import * as bcrypt from "bcryptjs"


@Entity('users')
class User {

    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({type: 'varchar', length: 45})
    name: string

    @Column({type: 'varchar', length: 45, unique: true})
    email: string

    @Column({type: 'boolean', default: false})
    admin: boolean 

    @Column({type: 'varchar', length: 120})
    password: string

    @CreateDateColumn({type: 'date'})
    createdAt: Date | string 

    @UpdateDateColumn({type: 'date'})
    updatedAt: Date | string | null | undefined 

    @DeleteDateColumn({type: 'date'})
    deletedAt: Date | string | null | undefined

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedules: Schedule[]

    @BeforeInsert()
    @BeforeUpdate()
    PassHash(){
        if(this.password){
            this.password = bcrypt.hashSync(this.password, 10)
        }
    }

}


export {
    User
}