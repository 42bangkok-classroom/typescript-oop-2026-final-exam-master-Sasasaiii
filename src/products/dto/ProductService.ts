
import { Injectable } from '@nestjs/common';
import { Product } from './Productinterface';
import * as fs from 'fs';
import * as path from 'path'



@Injectable()
export class ProductService {
  private readonly Product: Product[] = [];

  create(Product: Product) {
    this.Product.push(Product);
  }
  


  findAll(): Product[] {
    const filePath = path.join(process.cwd(), 'products.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  }
}
