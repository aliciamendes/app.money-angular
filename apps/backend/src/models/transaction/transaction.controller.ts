import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  list(): string {
    return this.transactionService.findAll();
  }

  @Post()
  create(): string {
    return this.transactionService.create();
  }

  @Patch()
  update(): string {
    return this.transactionService.update();
  }

  @Delete()
  delete(): string {
    return this.transactionService.delete();
  }
}
