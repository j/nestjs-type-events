import { Module } from '@nestjs/common';
import { TypeEventsModule } from '../../../src';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { HelloSubscriber } from './subscribers/hello.subscriber';

@Module({
  imports: [TypeEventsModule.forFeature([HelloSubscriber])],
  controllers: [HelloController],
  providers: [HelloService, HelloSubscriber]
})
export class HelloModule {}
