import { EventSubscriber, On } from 'type-events';
import { HelloEvent } from '../events/hello.event';
import { HelloService } from '../hello.service';

@EventSubscriber()
export class HelloSubscriber {
  constructor(private readonly service: HelloService) {}

  @On(HelloEvent)
  async onHello(event: HelloEvent): Promise<void> {
    event.who = this.service.upper(event.who);
  }
}
