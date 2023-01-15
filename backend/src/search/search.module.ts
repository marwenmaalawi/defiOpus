import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './models/search.model';
import { SearchMutationsResolver } from './resolvers/search.mutations.resolver';

import { SearchService } from './search.service';

@Module({
  imports:[TypeOrmModule.forFeature([Search])],
  providers: [SearchService,SearchMutationsResolver],
  exports: [SearchService],

})
export class SearchModule {}
