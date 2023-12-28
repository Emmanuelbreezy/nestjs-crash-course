import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateDataDto } from './dto/user-update-dto';
import { CreateDataDto } from './dto/user-create-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUser() {
    return this.userService.getAllUser();
  }

  @Get(`/:userId`)
  async getOneUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getOneUser(userId);
  }

  @Post()
  async create(@Body() createDto: CreateDataDto) {
    return this.userService.create(createDto);
  }

  @Put(`/:userId`)
  async update(
    @Body() updateData: UpdateDataDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateData, userId);
  }

  @Delete(`/:userId`)
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.remove(userId);
  }
}
