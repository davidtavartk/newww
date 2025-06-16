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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const artist_entity_1 = require("../../artist/entities/artist.entity");
const album_entity_1 = require("../../album/entities/album.entity");
const track_entity_1 = require("../../track/entities/track.entity");
let Favorites = class Favorites {
};
exports.Favorites = Favorites;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Favorites.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Favorites.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Favorites.prototype, "artistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Favorites.prototype, "albumId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Favorites.prototype, "trackId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Favorites.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.favorites, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Favorites.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.Artist, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'artistId' }),
    __metadata("design:type", artist_entity_1.Artist)
], Favorites.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => album_entity_1.Album, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'albumId' }),
    __metadata("design:type", album_entity_1.Album)
], Favorites.prototype, "album", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => track_entity_1.Track, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'trackId' }),
    __metadata("design:type", track_entity_1.Track)
], Favorites.prototype, "track", void 0);
exports.Favorites = Favorites = __decorate([
    (0, typeorm_1.Entity)('favorites')
], Favorites);
//# sourceMappingURL=favorites.entity.js.map