import { Test } from '@nestjs/testing';
import { Server } from 'http';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('app.spec.ts', () => {
  let server: Server;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = module.createNestApplication();
    server = app.getHttpServer();
    app.enableShutdownHooks();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('calls hello handler', (done) => {
    request(server)
      .get('/hello/world')
      .expect(200)
      .end((err, { text }) => {
        expect(err).toBeFalsy();
        expect(text).toBe('Hello, WORLD!');
        done();
      });
  });
});
