import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  findAll() {
    return 'This action returns all transaction';
  }

  update() {
    return 'This action update transaction';
  }

  delete() {
    return 'This action delete all transaction';
  }

  create() {
    return 'This action create all transaction';
  }
}
