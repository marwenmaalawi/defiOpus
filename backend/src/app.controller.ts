import { Controller, ForbiddenException, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { SearchService } from './search/search.service';
import { response } from 'express';
import { ResultService } from './search/result.service';
const axios = require("axios");
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly searchService:SearchService,private readonly resultService:ResultService) {}
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getsearchByterm/:term')
  async getsrachByTerm(@Param('term') term:string){

      var e= await this.searchService.searchfindbyterm(term)
      if(e==null){
       
        const response = await axios.get('https://api.unsplash.com/search/photos?query='+term+'&client_id=LlEdPT15nX3QmHu2tXR8VNFETAIzWMK68mIO16YlVsY');
        let r=response.data.results;
      let s= await this.searchService.searchCreate({"term":term})
        for(let i=0;i<r.length;i++){
       await this.resultService.resultCreate({"created_at":r[i].created_at,"url":r[i].urls.full,"username":r[i].user.username,"profile_image":r[i].user.profile_image.large,"search":s.search})
        }     
       e= await this.searchService.searchfindbyterm(term)
           
    }
    return e.results
    }
  
  
}


// ...

