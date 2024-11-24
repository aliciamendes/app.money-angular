import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  list(): string {
    return this.categoryService.findAll();
  }

  @Post()
  create(): string {
    return this.categoryService.create();
  }

  @Patch()
  update(): string {
    return this.categoryService.update();
  }

  @Delete()
  delete(): string {
    return this.categoryService.delete();
  }
}
