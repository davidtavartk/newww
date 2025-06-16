import { FavoritesService } from './favorites.service';
export declare class FavoritesController {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    getAllFavorites(): Promise<import("./dto/favorites-response.dto").FavoritesResponse>;
    addTrackToFavorites(id: string): Promise<{
        message: string;
    }>;
    removeTrackFromFavorites(id: string): Promise<void>;
    addAlbumToFavorites(id: string): Promise<{
        message: string;
    }>;
    removeAlbumFromFavorites(id: string): Promise<void>;
    addArtistToFavorites(id: string): Promise<{
        message: string;
    }>;
    removeArtistFromFavorites(id: string): Promise<void>;
}
