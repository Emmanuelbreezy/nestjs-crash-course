import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entity/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  //imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
