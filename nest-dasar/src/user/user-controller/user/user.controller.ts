import {
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Query,
    Redirect,
} from '@nestjs/common';

@Controller('/api/users')
export class UserController {
    @Post() //akan mengarah ke api/users
    post() {
        return 'POST';
    }

    @Get('/sample')
    get() {
        //nama method bebas tidak harus post, atau get
        return 'GET';
    }

    @Get('/sample-response')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    sampleResponse(): Record<string, string> {
        return {
            data: 'Sample JSONs',
        };
    }

    @Get('/sample-redirect')
    @Redirect('/api/users/sample')
    sampleRedirect() {
        // 
    }

    @Get('/hello')
    getHello(
        @Query('first_name') first_name: string,
        @Query('last_name') last_name: string,
    ) {
        return `Hello ${first_name} ${last_name}`;
    }

    @Get(':id')
    getId(@Param('id') id: string) {
        return `Id : ${id}`;
    }
}
