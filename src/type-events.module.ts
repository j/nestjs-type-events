import { DynamicModule, Module } from '@nestjs/common';
import { Newable } from 'type-events/lib/interfaces';
import { TypeEventsCoreModule } from './type-events-core.module';
import { TypeEventsSubscriberModule } from './type-events-subscriber.module';

@Module({})
export class TypeEventsModule {
  static forRoot(): DynamicModule {
    return {
      module: TypeEventsModule,
      imports: [TypeEventsCoreModule.register()]
    };
  }

  static forFeature(subscribers: Newable[]): DynamicModule {
    return {
      module: TypeEventsSubscriberModule,
      imports: [TypeEventsSubscriberModule.register(subscribers)]
    };
  }
}
