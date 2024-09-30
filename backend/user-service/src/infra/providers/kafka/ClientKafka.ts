import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'USER_SERVICE',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
})
export class ClientKafka {}
