import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
    @Post() //akan mengarah ke api/users
    post() {
        return 'POST';
    }

    @Get('/sample')
    get() { //nama method bebas tidak harus post, atau get
        return 'GET';
    }

    @Get('/hello')
    getHello(
        @Query('first_name') first_name: string,
        @Query('last_name') last_name: string
    ) {
        return `Hello ${first_name} ${last_name}`
    }

    @Get(':id')
    getId(@Param('id') id: string) {
        return `Id : ${id}`
    }
}
