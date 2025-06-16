import { Artist } from '../../artist/entities/artist.entity';
import { Track } from '../../track/entities/track.entity';
import { Favorites } from 'src/favorites/entities/favorites.entity';
export declare class Album {
    id: string;
    name: string;
    year: number;
    artistId: string | null;
    artist: Artist;
    tracks: Track[];
    favorites: Favorites[];
}
