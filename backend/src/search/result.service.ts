import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreateInput, ResultCreateOutput } from './dto/result-create.dto';
import { Repository } from 'typeorm';
import { Result } from './models/result.model';

@Injectable()
export class ResultService {
    constructor(@InjectRepository(Result) private readonly resultRepository:Repository<Result>,){}
    
    async resultCreate(input: ResultCreateInput):Promise<ResultCreateOutput>
    {
        const newResult=this.resultRepository.create(input);
        const result= await this.resultRepository.save(newResult);
        return {result}
    }
    async resultfind()
    {
        return this.resultRepository.find();
    }
}
