"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatunaModule = void 0;
const common_1 = require("@nestjs/common");
const datuna_service_1 = require("./datuna.service");
const datuna_controller_1 = require("./datuna.controller");
let DatunaModule = class DatunaModule {
};
exports.DatunaModule = DatunaModule;
exports.DatunaModule = DatunaModule = __decorate([
    (0, common_1.Module)({
        controllers: [datuna_controller_1.DatunaController],
        providers: [datuna_service_1.DatunaService],
    })
], DatunaModule);
//# sourceMappingURL=datuna.module.js.map