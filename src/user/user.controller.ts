import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Res,
  Req,
  Inject,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response, Request } from 'express';
import { User } from './user.schema';
@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get('/')
  async getAll(@Req() req: Request, @Res() res: Response) {
    try {
      const users: User[] = await this.userService.getAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }

  @Get('/:id')
  async getByID(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    if (!id) {
      return res.status(400).json({ message: 'user id not found' });
    }
    try {
      const user: User = await this.userService.getByID(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }

  @Post('/')
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() user: User,
  ) {
    try {
      const newUser: User = await this.userService.crate(user);
      return res.status(200).json(newUser);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }
}
