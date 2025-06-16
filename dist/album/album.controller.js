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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const album_service_1 = require("./album.service");
const create_album_dto_1 = require("./dto/create-album.dto");
const update_album_dto_1 = require("./dto/update-album.dto");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    async getAllAlbums() {
        return this.albumService.getAllAlbums();
    }
    async getAlbumById(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid album ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const album = await this.albumService.getAlbumById(id);
        if (!album) {
            throw new common_1.HttpException('Album not found', common_1.HttpStatus.NOT_FOUND);
        }
        return album;
    }
    async createAlbum(createAlbumDto) {
        return this.albumService.create(createAlbumDto);
    }
    async updateAlbum(id, updateAlbumDto) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid album ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const album = await this.albumService.update(id, updateAlbumDto);
        if (!album) {
            throw new common_1.HttpException('Album not found', common_1.HttpStatus.NOT_FOUND);
        }
        return album;
    }
    async deleteAlbum(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid album ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const deleted = await this.albumService.remove(id);
        if (!deleted) {
            throw new common_1.HttpException('Album not found', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
};
exports.AlbumController = AlbumController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getAllAlbums", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getAlbumById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_album_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "createAlbum", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_album_dto_1.UpdateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "updateAlbum", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "deleteAlbum", null);
exports.AlbumController = AlbumController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
//# sourceMappingURL=album.controller.js.map