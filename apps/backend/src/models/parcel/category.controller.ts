import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ParcelService } from './category.service';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Get()
  list(): string {
    return this.parcelService.findAll();
  }

  @Post()
  create(): string {
    return this.parcelService.create();
  }

  @Patch()
  update(): string {
    return this.parcelService.update();
  }

  @Delete()
  delete(): string {
    return this.parcelService.delete();
  }
}
