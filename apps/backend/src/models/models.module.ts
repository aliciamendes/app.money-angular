import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { ParcelController } from './parcel/category.controller';
import { ParcelService } from './parcel/category.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [],
  controllers: [
    CategoryController,
    CustomerController,
    ParcelController,
    TransactionController,
  ],
  providers: [
    CategoryService,
    CustomerService,
    ParcelService,
    TransactionService,
  ],
})
export class ModelsModule {}
