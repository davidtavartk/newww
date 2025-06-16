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
exports.Album = void 0;
const typeorm_1 = require("typeorm");
const artist_entity_1 = require("../../artist/entities/artist.entity");
const track_entity_1 = require("../../track/entities/track.entity");
const favorites_entity_1 = require("../../favorites/entities/favorites.entity");
let Album = class Album {
};
exports.Album = Album;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Album.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Album.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Album.prototype, "artistId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.Artist, (artist) => artist.albums, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'artistId' }),
    __metadata("design:type", artist_entity_1.Artist)
], Album.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => track_entity_1.Track, (track) => track.album),
    __metadata("design:type", Array)
], Album.prototype, "tracks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorites_entity_1.Favorites, (favorites) => favorites.album),
    __metadata("design:type", Array)
], Album.prototype, "favorites", void 0);
exports.Album = Album = __decorate([
    (0, typeorm_1.Entity)('albums')
], Album);
//# sourceMappingURL=album.entity.js.map