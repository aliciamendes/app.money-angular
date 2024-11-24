import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly financeService: CustomerService) {}

  @Get()
  list(): string {
    return this.financeService.findAll();
  }

  @Post()
  create(): string {
    return this.financeService.create();
  }

  @Patch()
  update(): string {
    return this.financeService.update();
  }

  @Delete()
  delete(): string {
    return this.financeService.delete();
  }
}
