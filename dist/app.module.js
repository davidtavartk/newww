"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const track_module_1 = require("./track/track.module");
const artist_module_1 = require("./artist/artist.module");
const album_module_1 = require("./album/album.module");
const favorites_module_1 = require("./favorites/favorites.module");
const user_entity_1 = require("./user/entities/user.entity");
const artist_entity_1 = require("./artist/entities/artist.entity");
const album_entity_1 = require("./album/entities/album.entity");
const track_entity_1 = require("./track/entities/track.entity");
const favorites_entity_1 = require("./favorites/entities/favorites.entity");
const logging_service_1 = require("./common/logging/logging.service");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [user_entity_1.User, artist_entity_1.Artist, album_entity_1.Album, track_entity_1.Track, favorites_entity_1.Favorites],
                    synchronize: configService.get('NODE_ENV') === 'development',
                    logging: configService.get('NODE_ENV') === 'development',
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            track_module_1.TrackModule,
            artist_module_1.ArtistModule,
            album_module_1.AlbumModule,
            favorites_module_1.FavoritesModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({}),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            logging_service_1.LoggingService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map