import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './models/result.model';
import { ResultMutationsResolver } from './resolvers/result.mutation.resolver';
import { ResultService } from './result.service';

@Module({
  imports:[TypeOrmModule.forFeature([Result])],
  providers: [ResultService,ResultMutationsResolver],
  exports: [ResultService],

})
export class ResultModule {}
