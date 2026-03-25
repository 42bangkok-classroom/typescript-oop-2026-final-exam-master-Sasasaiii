
import { Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.interface';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  


  @Get()
  findAll():any {
    return this.productService.findAll();
  }
}
