import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./real-estate.entity";

@Entity('schedules')
class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({type: 'date'})
    date: Date | string 

    @Column({type: 'time'})
    time: Date | string 

    @ManyToOne(() => User, (user) => user.schedules)
    user: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

}

export { 
    Schedule
}