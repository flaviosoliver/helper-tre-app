import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

@Schema({
  collection: 'auth',
  timestamps: true
})
export class Auth {
  @Prop({ type: mongoose.Types.ObjectId, required: true })
  idZone: string

  @Prop({ type: String, required: true })
  email: string

  @Prop({ type: String, required: true })
  password: string

  @Prop({ type: Boolean, required: true })
  active: boolean

  constructor(partial: Partial<Auth>) {
    Object.assign(this, partial)
  }
}

export type AuthDocument = Auth & mongoose.Document

export const AuthSchema = SchemaFactory.createForClass(Auth)
