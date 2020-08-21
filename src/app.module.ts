import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client as BarClient } from './bar.client';
import { Client as FooClient } from './foo.client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    BarClient,
    FooClient,
  ],
})
export class AppModule {}
