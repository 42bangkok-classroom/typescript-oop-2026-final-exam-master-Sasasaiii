
import { Module } from '@nestjs/common';
import { ProductController } from './ProductController';
import { ProductService } from './ProductService';


@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
