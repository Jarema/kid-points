import * as env from 'env-var';

export const MONGO_URL = env.get('MONGO_URL').required().asString;
export const MONGO_USER = env.get('MONGO_USER').required().asString;
export const MONGO_PASSWORD = env.get('MONGO_PASSWORD').required().asString;