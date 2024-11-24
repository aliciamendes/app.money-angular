import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll() {
    return 'This action returns all category';
  }

  update() {
    return 'This action update category';
  }

  delete() {
    return 'This action delete all category';
  }

  create() {
    return 'This action create all category';
  }
}
