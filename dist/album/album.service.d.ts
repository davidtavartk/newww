import { Repository } from 'typeorm';
import { Album } from './entities/album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { TrackService } from 'src/track/track.service';
export declare class AlbumService {
    private albumRepository;
    private trackService;
    constructor(albumRepository: Repository<Album>, trackService: TrackService);
    getAllAlbums(): Promise<Album[]>;
    getAlbumById(id: string): Promise<Album>;
    create(createAlbumDto: CreateAlbumDto): Promise<Album>;
    update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album>;
    remove(id: string): Promise<boolean>;
    setArtistIdToNull(artistId: string): Promise<void>;
}
