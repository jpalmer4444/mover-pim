import { Mover } from './mover';

export interface MovingJob {
    
    id: string;
    pounds: number;
    squareFeet: number;
    start: Date;
    end: Date;
    driver: Mover,
    movers: Array<Mover>
    
}
