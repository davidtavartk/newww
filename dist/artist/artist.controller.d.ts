import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistController {
    private readonly artistService;
    constructor(artistService: ArtistService);
    getAllArtists(): Promise<import("./entities/artist.entity").Artist[]>;
    getArtistById(id: string): Promise<import("./entities/artist.entity").Artist>;
    createArtist(createArtistDto: CreateArtistDto): Promise<import("./entities/artist.entity").Artist>;
    updateArtist(id: string, updateArtistDto: UpdateArtistDto): Promise<import("./entities/artist.entity").Artist>;
    deleteArtist(id: string): Promise<void>;
}
