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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const logging_service_1 = require("./common/logging/logging.service");
const public_decorator_1 = require("./auth/public.decorator");
let AppController = class AppController {
    constructor(appService, loggingService) {
        this.appService = appService;
        this.loggingService = loggingService;
    }
    getHello() {
        this.loggingService.log('Hello endpoint accessed', 'AppController');
        return this.appService.getHello();
    }
    testUncaught() {
        setTimeout(() => {
            throw new Error('Uncaught exception test');
        }, 100);
        return 'Check logs in 100ms';
    }
    testRejection() {
        Promise.reject(new Error('Unhandled rejection test'));
        return 'Check logs for unhandled rejection';
    }
};
exports.AppController = AppController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('test-uncaught'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "testUncaught", null);
__decorate([
    (0, common_1.Get)('test-rejection'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "testRejection", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        logging_service_1.LoggingService])
], AppController);
//# sourceMappingURL=app.controller.js.map