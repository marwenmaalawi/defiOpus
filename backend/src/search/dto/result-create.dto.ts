import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Result } from "../models/result.model";
import { Search } from "../models/search.model";



@InputType()
export class ResultCreateInput{


    @Field(() => String)
    created_at: string;
    @Field(() => String)
    url: string;
    @Field(() => String)
    username: string;
    @Field(() => String)
    profile_image: string;
    @Field(()=> String)
    search: Search;
    
    


}
@ObjectType()
export class ResultCreateOutput {
    @Field(() =>Result)
    result:Result

}