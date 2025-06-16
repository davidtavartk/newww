import { Repository } from 'typeorm';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { TrackService } from '../track/track.service';
import { AlbumService } from '../album/album.service';
export declare class ArtistService {
    private artistRepository;
    private trackService;
    private albumService;
    constructor(artistRepository: Repository<Artist>, trackService: TrackService, albumService: AlbumService);
    getAllArtists(): Promise<Artist[]>;
    getArtistById(id: string): Promise<Artist>;
    create(createArtistDto: CreateArtistDto): Promise<Artist>;
    update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist>;
    remove(id: string): Promise<boolean>;
}
