import { Field, ID, ObjectType } from '@nestjs/graphql';


import {BaseEntity,Column,Entity,OneToMany,JoinColumn,PrimaryGeneratedColumn} from 'typeorm';
import { Result } from './result.model';

@Entity()
@ObjectType()
export class Search extends BaseEntity {
@Field(()=>ID)
@PrimaryGeneratedColumn('uuid')
id:string;
@Field(() => String)
@Column()
term: string;
           
@OneToMany(() => Result, (result) => result.search)
@JoinColumn()
results: Result;

//@Column({type: 'jsonb', array: true, nullable: true})
}



