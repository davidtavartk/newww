import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    getAllAlbums(): Promise<import("./entities/album.entity").Album[]>;
    getAlbumById(id: string): Promise<import("./entities/album.entity").Album>;
    createAlbum(createAlbumDto: CreateAlbumDto): Promise<import("./entities/album.entity").Album>;
    updateAlbum(id: string, updateAlbumDto: UpdateAlbumDto): Promise<import("./entities/album.entity").Album>;
    deleteAlbum(id: string): Promise<void>;
}
