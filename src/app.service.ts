import { Injectable } from '@nestjs/common';

import { Client as BarClient } from './bar.client';
import { Client as FooClient } from './foo.client';

@Injectable()
export class AppService {
  constructor(private readonly foo: FooClient, private readonly bar: BarClient) {}

  getHello(): string {
    return `${this.foo.getMessage()} ${this.bar.getMessage()}`;
  }
}
