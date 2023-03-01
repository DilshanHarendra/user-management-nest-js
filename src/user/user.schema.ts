import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

@Schema({ timestamps: true })
export class User {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
