<h1 align="center" style="border-bottom: none;">nestjs-type-events</h1>
<p align="center">
    A <a href="https://github.com/j/type-events">type-events</a> module for <a href="https://github.com/nestjs/nest">Nest.js</a>.
</p>

<p align="center">
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/v/nestjs-type-events.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/l/nestjs-type-events.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/~jrdn" target="_blank"><img src="https://img.shields.io/npm/dm/nestjs-type-events.svg" alt="NPM Downloads" /></a>
</p>

## Installation

```bash
$ yarn add type-events nestjs-type-events
```

## Basic usage

**app.module.ts**

```typescript
import { Module } from "@nestjs/common";
import { TypeEventsModule } from 'nestjs-type-events';
import { DogsModule } from "./dog.module.ts";

@Module({
  imports: [
    TypeEventsModule.forRoot(),
    DogsModule
  ]
})
export class AppModule {}
```

**dog.module.ts**
```typescript
import { Module } from '@nestjs/common';
import { TypeEventsModule } from 'nestjs-type-events';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { HelloSubscriber } from './subscribers/hello.subscriber';

@Module({
  imports: [TypeEventsModule.forFeature([HelloSubscriber])],
  controllers: [HelloController],
  providers: [HelloService, HelloSubscriber]
})
export class HelloModule {}
```

See `tests/src` for full example.

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Stay in touch

- Author - [Jordan Stout](https://github.com/j)

## License

`nestjs-type-events` is [MIT licensed](LICENSE).