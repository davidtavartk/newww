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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(signupDto) {
        const saltRounds = parseInt(process.env.CRYPT_SALT) || 10;
        const hashedPassword = await bcrypt.hash(signupDto.password, saltRounds);
        const user = await this.userService.createRaw({
            login: signupDto.login,
            password: hashedPassword,
        });
        return {
            id: user.id,
            login: user.login,
            version: user.version,
            createdAt: user.createdAt.getTime(),
            updatedAt: user.updatedAt.getTime(),
        };
    }
    async login(loginDto) {
        const user = await this.userService.getUserByLoginRaw(loginDto.login);
        if (!user) {
            throw new common_1.ForbiddenException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.ForbiddenException('Invalid credentials');
        }
        const payload = { userId: user.id, login: user.login };
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET_KEY,
            expiresIn: process.env.TOKEN_EXPIRE_TIME,
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET_REFRESH_KEY,
            expiresIn: process.env.TOKEN_REFRESH_EXPIRE_TIME,
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async refresh(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: process.env.JWT_SECRET_REFRESH_KEY,
            });
            const newPayload = { userId: payload.userId, login: payload.login };
            const accessToken = this.jwtService.sign(newPayload, {
                secret: process.env.JWT_SECRET_KEY,
                expiresIn: process.env.TOKEN_EXPIRE_TIME,
            });
            const newRefreshToken = this.jwtService.sign(newPayload, {
                secret: process.env.JWT_SECRET_REFRESH_KEY,
                expiresIn: process.env.TOKEN_REFRESH_EXPIRE_TIME,
            });
            return {
                accessToken,
                refreshToken: newRefreshToken,
            };
        }
        catch (error) {
            throw new common_1.ForbiddenException('Invalid refresh token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map