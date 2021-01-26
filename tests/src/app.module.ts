import { Module } from '@nestjs/common';
import { TypeEventsModule } from '../../src';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TypeEventsModule.forRoot(), HelloModule]
})
export class AppModule {}
