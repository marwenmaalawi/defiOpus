import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchCreateInput, SearchCreateOutput } from './dto/Search-create.dto';
import { Search } from './models/search.model';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
    constructor(@InjectRepository(Search) private readonly searchRepository:Repository<Search>,){}
    
    async searchCreate(input: SearchCreateInput):Promise<SearchCreateOutput>
    {
        const newSearch=this.searchRepository.create(input);
        const search= await this.searchRepository.save(newSearch);
        return {search}
    }
    async searchfindbyterm(term:string){
        return this.searchRepository.findOne({ where: { "term":term },relations: ['results']});

    }
    async searchfind()
    {   
        return this.searchRepository.find();
    }     
}
