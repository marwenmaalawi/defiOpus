import { Injectable } from '@nestjs/common';
import { SearchService } from './search/search.service';
import { ResultService } from './search/result.service';
const axios = require("axios");

@Injectable()

export class AppService {
  constructor(private readonly searchService:SearchService,private readonly resultService:ResultService) {

  }
  getHello(): string {
    return 'Hello World!';
  }
  async getsrachByTerm(term:string){

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
