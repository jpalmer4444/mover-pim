import { User } from './user';

export interface Review {
    
    id: string;
    stars: number;
    comment: string;
    about: User;
    author: User;
    
}
