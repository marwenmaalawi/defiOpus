import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ResultCreateInput, ResultCreateOutput } from "../dto/result-create.dto";
import { Result } from "../models/result.model";
import { ResultService } from "../result.service";
@Resolver(Result)
export class ResultMutationsResolver{
    constructor(private readonly resultService:ResultService){}
    @Mutation(()=>ResultCreateOutput)
    async ResultCreate(@Args('input') input:ResultCreateInput){
        return this.resultService.resultCreate(input);
    }
}