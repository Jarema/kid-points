
import { Document } from 'mongoose';

export interface Kid extends Document {
    readonly name: string;
    readonly age: number;
    readonly points: number;
    readonly history: { reason: string, points: number }[];
}