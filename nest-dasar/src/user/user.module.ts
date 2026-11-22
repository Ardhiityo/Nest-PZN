import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user/user.controller';

@Module({
  controllers: [UserController]
})
export class UserModule {}
