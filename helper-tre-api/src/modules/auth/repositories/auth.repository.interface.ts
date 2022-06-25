import { AuthInterface } from '@/modules/auth/entities/auth.interface'

export interface IAuthRepository {
  create: (entity: AuthInterface) => Promise<string>
}
