import { CreateAuthDto } from '../dtos/create-auth.dto'
import { AuthInterface } from '../entities/auth.interface'

export const authSave = (entity: AuthInterface): CreateAuthDto => {
  return {
    id: entity.id,
    email: entity.email,
    password: entity.password,
    idZone: entity.idZone,
    active: entity.active
  }
}
