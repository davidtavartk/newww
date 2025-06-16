import { User } from '../../user/entities/user.entity';
import { Artist } from '../../artist/entities/artist.entity';
import { Album } from '../../album/entities/album.entity';
import { Track } from '../../track/entities/track.entity';
export declare class Favorites {
    id: string;
    userId: string;
    artistId: string | null;
    albumId: string | null;
    trackId: string | null;
    createdAt: Date;
    user: User;
    artist: Artist;
    album: Album;
    track: Track;
}
