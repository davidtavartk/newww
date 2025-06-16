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
exports.TrackController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const track_service_1 = require("./track.service");
const create_track_dto_1 = require("./dto/create-track.dto");
const update_track_dto_1 = require("./dto/update-track.dto");
let TrackController = class TrackController {
    constructor(trackService) {
        this.trackService = trackService;
    }
    async getAllTracks() {
        return this.trackService.getAllTracks();
    }
    async getTrackById(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid track ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const track = await this.trackService.getTrackById(id);
        if (!track) {
            throw new common_1.HttpException('Track not found', common_1.HttpStatus.NOT_FOUND);
        }
        return track;
    }
    async createTrack(createTrackDto) {
        return this.trackService.create(createTrackDto);
    }
    async updateTrack(id, updateTrackDto) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid track ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const track = await this.trackService.update(id, updateTrackDto);
        if (!track) {
            throw new common_1.HttpException('Track not found', common_1.HttpStatus.NOT_FOUND);
        }
        return track;
    }
    async deleteTrack(id) {
        if (!(0, class_validator_1.isUUID)(id)) {
            throw new common_1.HttpException('Invalid track ID (not UUID)', common_1.HttpStatus.BAD_REQUEST);
        }
        const deleted = await this.trackService.remove(id);
        if (!deleted) {
            throw new common_1.HttpException('Track not found', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('', common_1.HttpStatus.NO_CONTENT);
    }
};
exports.TrackController = TrackController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getAllTracks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getTrackById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_track_dto_1.CreateTrackDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "createTrack", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_track_dto_1.UpdateTrackDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "updateTrack", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "deleteTrack", null);
exports.TrackController = TrackController = __decorate([
    (0, common_1.Controller)('track'),
    __metadata("design:paramtypes", [track_service_1.TrackService])
], TrackController);
//# sourceMappingURL=track.controller.js.map