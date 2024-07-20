import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  /**
   * GET
   * POST
   * PATCH
   * DELETE
   * PUT
   */

  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users OR /users?role=''
  findAll(@Query('role') role?: 'INTEGER' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get('interns') //GET /users/interns
  findInterns() {
    return [];
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //POST /users
  create(@Body() user: {}){
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}){
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return {
      id,
      deleted: id ? true : false,
    }
  }

}
