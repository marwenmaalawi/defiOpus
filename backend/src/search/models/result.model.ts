import { Field, ID, ObjectType } from '@nestjs/graphql';


import {BaseEntity,Column,Entity,ManyToOne,JoinColumn,PrimaryGeneratedColumn} from 'typeorm';
import { Search } from './search.model';

@Entity()
@ObjectType()
export class Result extends BaseEntity {
@Field(()=>ID)
@PrimaryGeneratedColumn('uuid')
id:string;
@Field(() => String)
@Column()
created_at: string;
@Field(() => String)
@Column()
url: string;
@Field(() => String)
@Column()
username: string;
@Field(() => String)
@Column()
profile_image: string;
@Field(()=> String)
@ManyToOne(() => Search, (search) => search.results)
@JoinColumn()
search: Search;


}