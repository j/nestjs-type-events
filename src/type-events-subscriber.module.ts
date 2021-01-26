import { Module } from '@nestjs/common';
import { Newable } from 'type-events/lib/interfaces';
import { addSubscribers } from './type-events.storage';

@Module({})
export class TypeEventsSubscriberModule {
  static register(subscribers: Newable[]) {
    addSubscribers(subscribers);

    return {
      module: TypeEventsSubscriberModule
    };
  }
}
