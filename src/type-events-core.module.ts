import {
  DynamicModule,
  Global,
  Logger,
  Module,
  Provider
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EventDispatcher } from 'type-events';
import { getSubscribers } from './type-events.storage';

@Global()
@Module({})
export class TypeEventsCoreModule {
  static register(): DynamicModule {
    const eventDispatcher: Provider = {
      provide: EventDispatcher,
      useFactory: async (moduleRef: ModuleRef, logger: Logger) => {
        return new EventDispatcher({
          subscribers: getSubscribers(),
          logger,
          container: {
            get: async (Ref: any): Promise<any> => {
              return moduleRef.get(Ref, { strict: false });
            }
          }
        });
      },
      inject: [ModuleRef, Logger]
    };

    return {
      module: TypeEventsCoreModule,
      global: true,
      providers: [eventDispatcher, Logger],
      exports: [eventDispatcher]
    };
  }
}
