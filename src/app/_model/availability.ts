import { Mover } from './mover';

export interface Availability {
    
    id: string;
    mover: Mover;
    start: Date;
    end: Date;
    
}
