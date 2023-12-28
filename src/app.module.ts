import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user/entity/user.entity';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    CartModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'password',
    //   database: 'nestjs',
    //   entities: [User],
    //   synchronize: true,
    // }),
    OrdersModule,
    AuthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
