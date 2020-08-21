import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';
import { BarService } from './BarService';

@Controller()
export class AppController {
  constructor(private readonly foo: FooService, private readonly bar: BarService) {}

  @Get()
  getHello(): string {
    return `${this.foo.getMessage()} ${this.bar.getMessage()}`;
  }
}
