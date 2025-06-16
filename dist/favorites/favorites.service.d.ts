import { Repository } from 'typeorm';
import { Favorites } from './entities/favorites.entity';
import { FavoritesResponse } from './dto/favorites-response.dto';
import { ArtistService } from '../artist/artist.service';
import { AlbumService } from '../album/album.service';
import { TrackService } from '../track/track.service';
import { UserService } from '../user/user.service';
export declare class FavoritesService {
    private favoritesRepository;
    private artistService;
    private albumService;
    private trackService;
    private userService;
    private dummyUserId;
    constructor(favoritesRepository: Repository<Favorites>, artistService: ArtistService, albumService: AlbumService, trackService: TrackService, userService: UserService);
    private getDummyUserId;
    getAllFavorites(): Promise<FavoritesResponse>;
    addTrackToFavorites(trackId: string): Promise<boolean>;
    removeTrackFromFavorites(trackId: string): Promise<boolean>;
    addAlbumToFavorites(albumId: string): Promise<boolean>;
    removeAlbumFromFavorites(albumId: string): Promise<boolean>;
    addArtistToFavorites(artistId: string): Promise<boolean>;
    removeArtistFromFavorites(artistId: string): Promise<boolean>;
}
