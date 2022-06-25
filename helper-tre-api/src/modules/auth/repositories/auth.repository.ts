import { InjectTenancyModel } from '@needle-innovision/nestjs-tenancy'
import { Injectable } from '@nestjs/common'
import mongoose from 'mongoose'
import { Auth, AuthDocument } from '@/modules/auth/models/auth'
import { IAuthRepository } from '@/modules/auth/repositories/auth.repository.interface'
import { AuthInterface } from '../entities/auth.interface'

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectTenancyModel(Auth.name)
    private readonly Model: mongoose.Model<AuthDocument>
  ) {}
  create: (entity: AuthInterface) => Promise<string>
}
