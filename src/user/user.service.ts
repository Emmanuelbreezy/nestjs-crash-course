import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './entity/user.entity';
import { CreateDataDto } from './dto/user-create-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  // ) {}
  // get(): Promise<User[]> {
  //   return this.userRepository.find();
  // }

  // create(createDto: CreateDataDto) {
  //   return this.userRepository.create(createDto);
  // }
  async getAllUser() {
    return this.prisma.user.findMany();
  }

  async getOneUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      status: 'success',
      message: 'User found',
      user: user,
    };
  }

  async create(data: CreateDataDto) {
    const user = await this.prisma.user.create({
      data,
    });
    return {
      status: 'success',
      message: 'User created successfully',
      user,
    };
  }

  async update(data: { name: string }, userId: number) {
    return this.prisma.user.update({ where: { id: userId }, data });
  }

  async remove(userId: number) {
    return this.prisma.user.delete({ where: { id: userId } });
  }
}
