import { Repository } from 'typeorm';
import { Track } from './entities/track.entity';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
export declare class TrackService {
    private trackRepository;
    constructor(trackRepository: Repository<Track>);
    getAllTracks(): Promise<Track[]>;
    getTrackById(id: string): Promise<Track>;
    create(createTrackDto: CreateTrackDto): Promise<Track>;
    update(id: string, updateTrackDto: UpdateTrackDto): Promise<Track>;
    remove(id: string): Promise<boolean>;
    setArtistIdToNull(artistId: string): Promise<void>;
    setAlbumIdToNull(albumId: string): Promise<void>;
}
