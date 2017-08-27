
export interface MovingJob {
    
    id: string;
    pounds: number;
    squareFeet: number;
    start: Date;
    end: Date;
    driverId: string,
    moverIds: Array<string>
    
}
