import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { ClientKafka } from './infra/providers/kafka/ClientKafka';

@Module({
  imports: [HttpModule, ClientKafka],
  controllers: [],
  providers: [],
})
export class AppModule {}
