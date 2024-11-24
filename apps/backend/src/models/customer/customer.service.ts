import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findAll() {
    return 'This action returns all customers';
  }

  update() {
    return 'This action update customers';
  }

  delete() {
    return 'This action delete all customers';
  }

  create() {
    return 'This action create all customers';
  }
}
