"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artist_controller_1 = require("./artist.controller");
const artist_service_1 = require("./artist.service");
const artist_entity_1 = require("./entities/artist.entity");
const track_module_1 = require("../track/track.module");
const album_module_1 = require("../album/album.module");
let ArtistModule = class ArtistModule {
};
exports.ArtistModule = ArtistModule;
exports.ArtistModule = ArtistModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([artist_entity_1.Artist]),
            (0, common_1.forwardRef)(() => track_module_1.TrackModule),
            (0, common_1.forwardRef)(() => album_module_1.AlbumModule),
        ],
        controllers: [artist_controller_1.ArtistController],
        providers: [artist_service_1.ArtistService],
        exports: [artist_service_1.ArtistService],
    })
], ArtistModule);
//# sourceMappingURL=artist.module.js.map