import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    getAllTracks(): Promise<import("./entities/track.entity").Track[]>;
    getTrackById(id: string): Promise<import("./entities/track.entity").Track>;
    createTrack(createTrackDto: CreateTrackDto): Promise<import("./entities/track.entity").Track>;
    updateTrack(id: string, updateTrackDto: UpdateTrackDto): Promise<import("./entities/track.entity").Track>;
    deleteTrack(id: string): Promise<void>;
}
