import { client } from '../prisma';

export const DB_SYMBOL = Symbol('DB');
export const db = client;
export type DB = typeof db;
