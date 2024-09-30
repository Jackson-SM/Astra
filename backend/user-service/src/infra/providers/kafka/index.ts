import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'USER_SERVICE',
  brokers: ['localhost:9092'],
});
