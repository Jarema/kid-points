import { Connection } from 'mongoose';
import { KidSchema } from './schemas/kid.schema';

export const kidsProviders = [
  {
    provide: 'KidModelToken',
    useFactory: (connection: Connection) => connection.model('Kid', KidSchema),
    inject: ['DbConnectionToken'],
  },
];