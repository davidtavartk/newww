import { Favorites } from '../../favorites/entities/favorites.entity';
export declare class User {
    id: string;
    login: string;
    password: string;
    version: number;
    createdAt: Date;
    updatedAt: Date;
    favorites: Favorites[];
}
