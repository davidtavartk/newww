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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const album_entity_1 = require("./entities/album.entity");
const track_service_1 = require("../track/track.service");
let AlbumService = class AlbumService {
    constructor(albumRepository, trackService) {
        this.albumRepository = albumRepository;
        this.trackService = trackService;
    }
    async getAllAlbums() {
        return await this.albumRepository.find();
    }
    async getAlbumById(id) {
        return await this.albumRepository.findOne({ where: { id } });
    }
    async create(createAlbumDto) {
        const newAlbum = this.albumRepository.create(createAlbumDto);
        return await this.albumRepository.save(newAlbum);
    }
    async update(id, updateAlbumDto) {
        const album = await this.albumRepository.findOne({ where: { id } });
        if (!album)
            return null;
        await this.albumRepository.update(id, updateAlbumDto);
        return await this.albumRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const album = await this.albumRepository.findOne({ where: { id } });
        if (!album)
            return false;
        await this.trackService.setAlbumIdToNull(id);
        const result = await this.albumRepository.delete(id);
        return result.affected > 0;
    }
    async setArtistIdToNull(artistId) {
        await this.albumRepository.update({ artistId }, { artistId: null });
    }
};
exports.AlbumService = AlbumService;
exports.AlbumService = AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(album_entity_1.Album)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => track_service_1.TrackService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        track_service_1.TrackService])
], AlbumService);
//# sourceMappingURL=album.service.js.map