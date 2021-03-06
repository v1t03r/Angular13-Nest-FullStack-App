import { Injectable } from '@nestjs/common';
import { Message } from '@ng-boiler/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return {
      message: 'Hello from the API!'
    };
  }
}
