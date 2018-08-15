import * as mongoose from 'mongoose';
import * as con from '../constants';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://${con.MONGO_USER}:${con.MONGO_PASSWORD}@${con.MONGO_URL}/kids`),
  },
];