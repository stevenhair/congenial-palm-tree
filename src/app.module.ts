import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { FooService } from './foo.service';
import { Client as BarClient } from './bar.client';
import { Client as FooClient } from './foo.client';
import { BarService } from './BarService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    FooService,
    BarService,
    BarClient,
    FooClient,
  ],
})
export class AppModule {}
