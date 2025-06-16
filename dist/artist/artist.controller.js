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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const artist_service_1 = require("./artist.service");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const update_artist_dto_1 = require("./dto/update-artist.dto");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    async getAllArtists() {
        return this.artistService.getAllArtists();
    }
    async getArtistById(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid artist ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const artist = await this.artistService.getArtistById(id);
        if (!artist) {
            throw new common_1.HttpException('Artist not found', common_1.HttpStatus.NOT_FOUND);
        }
        return artist;
    }
    async createArtist(createArtistDto) {
        return this.artistService.create(createArtistDto);
    }
    async updateArtist(id, updateArtistDto) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid artist ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const artist = await this.artistService.update(id, updateArtistDto);
        if (!artist) {
            throw new common_1.HttpException('Artist not found', common_1.HttpStatus.NOT_FOUND);
        }
        return artist;
    }
    async deleteArtist(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid artist ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const deleted = await this.artistService.remove(id);
        if (!deleted) {
            throw new common_1.HttpException('Artist not found', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
};
exports.ArtistController = ArtistController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getAllArtists", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getArtistById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "createArtist", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artist_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "updateArtist", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "deleteArtist", null);
exports.ArtistController = ArtistController = __decorate([
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [artist_service_1.ArtistService])
], ArtistController);
//# sourceMappingURL=artist.controller.js.map