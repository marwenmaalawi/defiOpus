import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Search } from "../models/search.model";


@InputType()
export class SearchCreateInput{

@Field(() => String)
term: string;



}
@ObjectType()
export class SearchCreateOutput {
    @Field(() =>Search)
    search:Search

}