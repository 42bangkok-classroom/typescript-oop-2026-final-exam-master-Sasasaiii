
import { Injectable } from '@nestjs/common';
import { Pruchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path'



@Injectable()
export class PurchaseService {
  private readonly Product: Pruchase[] = [];

  create(Product: Pruchase) {
    this.Product.push(Product);
  }
  
  findAll(): Pruchase[] {
    const filePath = path.join(process.cwd(), './data/products.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  }

  
}
