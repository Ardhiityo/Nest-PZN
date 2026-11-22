import { Controller, Get, Post } from '@nestjs/common';

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
}
