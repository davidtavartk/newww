"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artist_entity_1 = require("./entities/artist.entity");
const track_service_1 = require("../track/track.service");
const album_service_1 = require("../album/album.service");
let ArtistService = class ArtistService {
    constructor(artistRepository, trackService, albumService) {
        this.artistRepository = artistRepository;
        this.trackService = trackService;
        this.albumService = albumService;
    }
    async getAllArtists() {
        return await this.artistRepository.find();
    }
    async getArtistById(id) {
        return await this.artistRepository.findOne({ where: { id } });
    }
    async create(createArtistDto) {
        const newArtist = this.artistRepository.create(createArtistDto);
        return await this.artistRepository.save(newArtist);
    }
    async update(id, updateArtistDto) {
        const artist = await this.artistRepository.findOne({ where: { id } });
        if (!artist)
            return null;
        await this.artistRepository.update(id, updateArtistDto);
        return await this.artistRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const artist = await this.artistRepository.findOne({ where: { id } });
        if (!artist)
            return false;
        await this.albumService.setArtistIdToNull(id);
        await this.trackService.setArtistIdToNull(id);
        const result = await this.artistRepository.delete(id);
        return result.affected > 0;
    }
};
exports.ArtistService = ArtistService;
exports.ArtistService = ArtistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artist_entity_1.Artist)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => track_service_1.TrackService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => album_service_1.AlbumService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        track_service_1.TrackService,
        album_service_1.AlbumService])
], ArtistService);
//# sourceMappingURL=artist.service.js.map