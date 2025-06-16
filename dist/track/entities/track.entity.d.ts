import { Artist } from '../../artist/entities/artist.entity';
import { Album } from '../../album/entities/album.entity';
import { Favorites } from 'src/favorites/entities/favorites.entity';
export declare class Track {
    id: string;
    name: string;
    artistId: string | null;
    albumId: string | null;
    duration: number;
    artist: Artist;
    album: Album;
    favorites: Favorites[];
}
