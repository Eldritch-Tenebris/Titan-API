import { User } from '../models/User';

declare namespace Express {
    interface Request {
        user?: {
            id: number;
        };
    }
}

export {};