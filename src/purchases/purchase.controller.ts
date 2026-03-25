
import { Controller, Get, Post } from '@nestjs/common';
import { Pruchase } from './purchase.interface';
import { PurchaseService } from './purchase.service';


@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}
  
  @Post()
  create(): string {
    return 'Test';
  }


  @Get()
  findAll():any {
    return this.purchaseService.findAll();
  }
}
