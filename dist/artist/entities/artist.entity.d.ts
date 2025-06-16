import { Album } from '../../album/entities/album.entity';
import { Track } from '../../track/entities/track.entity';
import { Favorites } from 'src/favorites/entities/favorites.entity';
export declare class Artist {
    id: string;
    name: string;
    grammy: boolean;
    albums: Album[];
    tracks: Track[];
    favorites: Favorites[];
}
