import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import fs from 'fs';
import yaml from 'yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: process.env.CLIENT_URL,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('Bright-Memory-API')
    .setDescription('Bright-Memory Backend service documents')
    .setVersion(process.env.npm_package_version)
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  fs.writeFileSync(
    'docs/openAPISchema.yaml',
    yaml.stringify(document, { singleQuote: true })
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(53250);
}

void bootstrap();
