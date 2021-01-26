import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  upper(who: string): string {
    return who.toUpperCase();
  }
}
