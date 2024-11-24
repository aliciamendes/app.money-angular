import { Injectable } from '@nestjs/common';

@Injectable()
export class ParcelService {
  findAll() {
    return 'This action returns all parcel';
  }

  update() {
    return 'This action update parcel';
  }

  delete() {
    return 'This action delete all parcel';
  }

  create() {
    return 'This action create all parcel';
  }
}
