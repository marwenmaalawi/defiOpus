import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SearchService } from "src/search/search.service";
import { SearchCreateInput, SearchCreateOutput } from "../dto/Search-create.dto";
import { Search } from "../models/search.model";
import { Result } from "../models/result.model";
@Resolver(Search)
export class SearchMutationsResolver{
    constructor(private readonly searchService:SearchService){}
    @Mutation(()=>SearchCreateOutput)
    async SearchCreate(@Args('input') input:SearchCreateInput){
        return this.searchService.searchCreate(input);
    }
    

    @Query(() => [Search])
    async searchfind(){
        return this.searchService.searchfind;
    }
    
}