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
exports.TrackService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const track_entity_1 = require("./entities/track.entity");
let TrackService = class TrackService {
    constructor(trackRepository) {
        this.trackRepository = trackRepository;
    }
    async getAllTracks() {
        return await this.trackRepository.find();
    }
    async getTrackById(id) {
        return await this.trackRepository.findOne({ where: { id } });
    }
    async create(createTrackDto) {
        const newTrack = this.trackRepository.create(createTrackDto);
        return await this.trackRepository.save(newTrack);
    }
    async update(id, updateTrackDto) {
        const track = await this.trackRepository.findOne({ where: { id } });
        if (!track)
            return null;
        await this.trackRepository.update(id, updateTrackDto);
        return await this.trackRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const result = await this.trackRepository.delete(id);
        return result.affected > 0;
    }
    async setArtistIdToNull(artistId) {
        await this.trackRepository.update({ artistId }, { artistId: null });
    }
    async setAlbumIdToNull(albumId) {
        await this.trackRepository.update({ albumId }, { albumId: null });
    }
};
exports.TrackService = TrackService;
exports.TrackService = TrackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(track_entity_1.Track)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrackService);
//# sourceMappingURL=track.service.js.map