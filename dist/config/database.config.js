"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const user_entity_1 = require("../user/entities/user.entity");
const artist_entity_1 = require("../artist/entities/artist.entity");
const album_entity_1 = require("../album/entities/album.entity");
const track_entity_1 = require("../track/entities/track.entity");
const favorites_entity_1 = require("../favorites/entities/favorites.entity");
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'music_library',
    entities: [user_entity_1.User, artist_entity_1.Artist, album_entity_1.Album, track_entity_1.Track, favorites_entity_1.Favorites],
    synchronize: true,
    logging: false,
};
//# sourceMappingURL=database.config.js.map