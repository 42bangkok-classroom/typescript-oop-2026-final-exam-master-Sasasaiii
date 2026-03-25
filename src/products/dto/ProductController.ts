
import { Controller, Get, Post } from '@nestjs/common';
import { Product } from './Productinterface';
import { ProductService } from './ProductService';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Post()
  create(): string {
    return 'Test';
  }

  @Get()
  findAll(): any {
    return this.productService.findAll();
  }
}
