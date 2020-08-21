import { Injectable } from '@nestjs/common';

import { Client } from './bar.client';

@Injectable()
export class BarService {
  constructor(private readonly bar: Client) {}

  getMessage(): string {
    return this.bar.getMessage();
  }
}
