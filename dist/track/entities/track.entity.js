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
exports.Track = void 0;
const typeorm_1 = require("typeorm");
const artist_entity_1 = require("../../artist/entities/artist.entity");
const album_entity_1 = require("../../album/entities/album.entity");
const favorites_entity_1 = require("../../favorites/entities/favorites.entity");
let Track = class Track {
};
exports.Track = Track;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Track.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Track.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "artistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "albumId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Track.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.Artist, (artist) => artist.tracks, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'artistId' }),
    __metadata("design:type", artist_entity_1.Artist)
], Track.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => album_entity_1.Album, (album) => album.tracks, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'albumId' }),
    __metadata("design:type", album_entity_1.Album)
], Track.prototype, "album", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorites_entity_1.Favorites, (favorites) => favorites.track),
    __metadata("design:type", Array)
], Track.prototype, "favorites", void 0);
exports.Track = Track = __decorate([
    (0, typeorm_1.Entity)('tracks')
], Track);
//# sourceMappingURL=track.entity.js.map