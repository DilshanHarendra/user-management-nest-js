import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async crate(user: User): Promise<User | null> {
    const newUser: User = await this.userModel.create(user);
    return this.getByID(`${newUser._id}`);
  }
  async getAll(): Promise<User[] | null> {
    return this.userModel.find({}).lean().exec();
  }
  async getByID(id: string): Promise<User | null> {
    return this.userModel.findOne({ _id: id }).lean().exec();
  }
}
