import { AuthService } from '@/modules/auth/services/auth.service'
import { AuthController } from '@/modules/auth/controllers/auth.controller'
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
