import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testConnection(): string {
    return 'API is working!';
  }
}
