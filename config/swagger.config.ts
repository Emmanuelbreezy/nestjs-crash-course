// swagger.config.ts
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Your API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('auth', 'Authentication APIs')
    .addTag('user', 'User APIs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
