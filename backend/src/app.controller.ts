import { Controller, ForbiddenException, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

const axios = require("axios");
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getsearchByterm/:term')
  async getsrachByTerm(@Param('term') term:string){

     return this.appService.getsrachByTerm(term);

    }
  
  
}


// ...

