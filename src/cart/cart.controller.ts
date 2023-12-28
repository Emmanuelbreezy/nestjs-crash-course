import { Controller, Get } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Get()
  getAllCart() {
    return { name: 'Sam', noOfCart: 30 };
  }
}
