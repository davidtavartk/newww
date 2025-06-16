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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const class_transformer_1 = require("class-transformer");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        const users = await this.userRepository.find();
        return users.map((user) => (Object.assign(Object.assign({}, (0, class_transformer_1.instanceToPlain)(user)), { createdAt: user.createdAt.getTime(), updatedAt: user.updatedAt.getTime() })));
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            return null;
        return Object.assign(Object.assign({}, (0, class_transformer_1.instanceToPlain)(user)), { createdAt: user.createdAt.getTime(), updatedAt: user.updatedAt.getTime() });
    }
    async getUserByIdRaw(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async create(createUserDto) {
        const newUser = this.userRepository.create({
            login: createUserDto.login,
            password: createUserDto.password,
            version: 1,
        });
        const savedUser = await this.userRepository.save(newUser);
        return Object.assign(Object.assign({}, (0, class_transformer_1.instanceToPlain)(savedUser)), { createdAt: savedUser.createdAt.getTime(), updatedAt: savedUser.updatedAt.getTime() });
    }
    async createRaw(createUserDto) {
        const newUser = this.userRepository.create({
            login: createUserDto.login,
            password: createUserDto.password,
            version: 1,
        });
        return await this.userRepository.save(newUser);
    }
    async updatePassword(id, updatePasswordDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            return null;
        if (user.password !== updatePasswordDto.oldPassword) {
            throw new Error('Old password is incorrect');
        }
        user.password = updatePasswordDto.newPassword;
        user.version = user.version + 1;
        const updatedUser = await this.userRepository.save(user);
        return Object.assign(Object.assign({}, (0, class_transformer_1.instanceToPlain)(updatedUser)), { createdAt: updatedUser.createdAt.getTime(), updatedAt: updatedUser.updatedAt.getTime() });
    }
    async remove(id) {
        const result = await this.userRepository.delete(id);
        return result.affected > 0;
    }
    async getUserByLoginRaw(login) {
        return await this.userRepository.findOne({ where: { login } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map