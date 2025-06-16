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
exports.FavoritesController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const favorites_service_1 = require("./favorites.service");
const public_decorator_1 = require("../auth/public.decorator");
let FavoritesController = class FavoritesController {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    async getAllFavorites() {
        return this.favoritesService.getAllFavorites();
    }
    async addTrackToFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid track ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const added = await this.favoritesService.addTrackToFavorites(id);
        if (!added) {
            throw new common_1.HttpException('Track not found', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return { message: 'Track added to favorites' };
    }
    async removeTrackFromFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid track ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const removed = await this.favoritesService.removeTrackFromFavorites(id);
        if (!removed) {
            throw new common_1.HttpException('Track is not in favorites', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
    async addAlbumToFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid album ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const added = await this.favoritesService.addAlbumToFavorites(id);
        if (!added) {
            throw new common_1.HttpException('Album not found', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return { message: 'Album added to favorites' };
    }
    async removeAlbumFromFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid album ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const removed = await this.favoritesService.removeAlbumFromFavorites(id);
        if (!removed) {
            throw new common_1.HttpException('Album is not in favorites', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
    async addArtistToFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid artist ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const added = await this.favoritesService.addArtistToFavorites(id);
        if (!added) {
            throw new common_1.HttpException('Artist not found', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return { message: 'Artist added to favorites' };
    }
    async removeArtistFromFavorites(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid artist ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const removed = await this.favoritesService.removeArtistFromFavorites(id);
        if (!removed) {
            throw new common_1.HttpException('Artist is not in favorites', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
};
exports.FavoritesController = FavoritesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "getAllFavorites", null);
__decorate([
    (0, common_1.Post)('track/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "addTrackToFavorites", null);
__decorate([
    (0, common_1.Delete)('track/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "removeTrackFromFavorites", null);
__decorate([
    (0, common_1.Post)('album/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "addAlbumToFavorites", null);
__decorate([
    (0, common_1.Delete)('album/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "removeAlbumFromFavorites", null);
__decorate([
    (0, common_1.Post)('artist/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "addArtistToFavorites", null);
__decorate([
    (0, common_1.Delete)('artist/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "removeArtistFromFavorites", null);
exports.FavoritesController = FavoritesController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)('favs'),
    __metadata("design:paramtypes", [favorites_service_1.FavoritesService])
], FavoritesController);
//# sourceMappingURL=favorites.controller.js.map