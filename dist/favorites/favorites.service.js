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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const favorites_entity_1 = require("./entities/favorites.entity");
const artist_service_1 = require("../artist/artist.service");
const album_service_1 = require("../album/album.service");
const track_service_1 = require("../track/track.service");
const user_service_1 = require("../user/user.service");
let FavoritesService = class FavoritesService {
    constructor(favoritesRepository, artistService, albumService, trackService, userService) {
        this.favoritesRepository = favoritesRepository;
        this.artistService = artistService;
        this.albumService = albumService;
        this.trackService = trackService;
        this.userService = userService;
        this.dummyUserId = null;
    }
    async getDummyUserId() {
        if (this.dummyUserId)
            return this.dummyUserId;
        const existingUser = await this.userService.getUserByLoginRaw('dummy-user');
        if (existingUser) {
            this.dummyUserId = existingUser.id;
            return this.dummyUserId;
        }
        const dummyUser = await this.userService.createRaw({
            login: 'dummy-user',
            password: 'dummy-password',
        });
        this.dummyUserId = dummyUser.id;
        return this.dummyUserId;
    }
    async getAllFavorites() {
        const favorites = await this.favoritesRepository.find({
            relations: ['artist', 'album', 'track'],
        });
        const artists = favorites
            .filter((fav) => fav.artist)
            .map((fav) => fav.artist);
        const albums = favorites.filter((fav) => fav.album).map((fav) => fav.album);
        const tracks = favorites.filter((fav) => fav.track).map((fav) => fav.track);
        return {
            artists: [...new Map(artists.map((a) => [a.id, a])).values()],
            albums: [...new Map(albums.map((a) => [a.id, a])).values()],
            tracks: [...new Map(tracks.map((t) => [t.id, t])).values()],
        };
    }
    async addTrackToFavorites(trackId) {
        const track = await this.trackService.getTrackById(trackId);
        if (!track)
            return false;
        const userId = await this.getDummyUserId();
        const existing = await this.favoritesRepository.findOne({
            where: { trackId, userId },
        });
        if (!existing) {
            const favorite = this.favoritesRepository.create({
                trackId,
                userId,
            });
            await this.favoritesRepository.save(favorite);
        }
        return true;
    }
    async removeTrackFromFavorites(trackId) {
        const userId = await this.getDummyUserId();
        const result = await this.favoritesRepository.delete({
            trackId,
            userId,
        });
        return result.affected > 0;
    }
    async addAlbumToFavorites(albumId) {
        const album = await this.albumService.getAlbumById(albumId);
        if (!album)
            return false;
        const userId = await this.getDummyUserId();
        const existing = await this.favoritesRepository.findOne({
            where: { albumId, userId },
        });
        if (!existing) {
            const favorite = this.favoritesRepository.create({
                albumId,
                userId,
            });
            await this.favoritesRepository.save(favorite);
        }
        return true;
    }
    async removeAlbumFromFavorites(albumId) {
        const userId = await this.getDummyUserId();
        const result = await this.favoritesRepository.delete({
            albumId,
            userId,
        });
        return result.affected > 0;
    }
    async addArtistToFavorites(artistId) {
        const artist = await this.artistService.getArtistById(artistId);
        if (!artist)
            return false;
        const userId = await this.getDummyUserId();
        const existing = await this.favoritesRepository.findOne({
            where: { artistId, userId },
        });
        if (!existing) {
            const favorite = this.favoritesRepository.create({
                artistId,
                userId,
            });
            await this.favoritesRepository.save(favorite);
        }
        return true;
    }
    async removeArtistFromFavorites(artistId) {
        const userId = await this.getDummyUserId();
        const result = await this.favoritesRepository.delete({
            artistId,
            userId,
        });
        return result.affected > 0;
    }
};
exports.FavoritesService = FavoritesService;
exports.FavoritesService = FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorites_entity_1.Favorites)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        artist_service_1.ArtistService,
        album_service_1.AlbumService,
        track_service_1.TrackService,
        user_service_1.UserService])
], FavoritesService);
//# sourceMappingURL=favorites.service.js.map