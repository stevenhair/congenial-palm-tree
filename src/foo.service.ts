import { Injectable } from '@nestjs/common';

import { Client } from './foo.client';

@Injectable()
export class FooService {
  constructor(private readonly foo: Client) {}

  getMessage(): string {
    return this.foo.getMessage();
  }
}
