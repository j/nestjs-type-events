import { Controller, Get, Param } from '@nestjs/common';
import { EventDispatcher } from 'type-events';
import { HelloEvent } from './events/hello.event';

@Controller('/hello')
export class HelloController {
  constructor(private readonly dispatcher: EventDispatcher) {}

  @Get('/:who')
  async hello(@Param() params: any): Promise<string> {
    // some people may not want to mutate events
    const event = new HelloEvent(params);

    await this.dispatcher.dispatch(event);

    return `Hello, ${event.who}!`;
  }
}
