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
exports.DatunaController = void 0;
const common_1 = require("@nestjs/common");
const datuna_service_1 = require("./datuna.service");
const create_datuna_dto_1 = require("./dto/create-datuna.dto");
const update_datuna_dto_1 = require("./dto/update-datuna.dto");
let DatunaController = class DatunaController {
    constructor(datunaService) {
        this.datunaService = datunaService;
    }
    create(createDatunaDto) {
        return this.datunaService.create(createDatunaDto);
    }
    findAll() {
        return this.datunaService.findAll();
    }
    findOne(id) {
        return this.datunaService.findOne(+id);
    }
    update(id, updateDatunaDto) {
        return this.datunaService.update(+id, updateDatunaDto);
    }
    remove(id) {
        return this.datunaService.remove(+id);
    }
};
exports.DatunaController = DatunaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_datuna_dto_1.CreateDatunaDto]),
    __metadata("design:returntype", void 0)
], DatunaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatunaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatunaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_datuna_dto_1.UpdateDatunaDto]),
    __metadata("design:returntype", void 0)
], DatunaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatunaController.prototype, "remove", null);
exports.DatunaController = DatunaController = __decorate([
    (0, common_1.Controller)('datuna'),
    __metadata("design:paramtypes", [datuna_service_1.DatunaService])
], DatunaController);
//# sourceMappingURL=datuna.controller.js.map