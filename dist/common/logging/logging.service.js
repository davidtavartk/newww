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
exports.LoggingService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let LoggingService = class LoggingService {
    constructor() {
        this.logLevels = ['error', 'warn', 'log', 'debug', 'verbose'];
        this.currentLevel = process.env.LOG_LEVEL || 'log';
        this.logDir = 'logs';
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir);
        }
    }
    writeToFile(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} [${level.toUpperCase()}] ${message}\n`;
        fs.appendFileSync(path.join(this.logDir, 'app.log'), logMessage);
    }
    log(message, context) {
        if (this.shouldLog('log')) {
            const fullMessage = `${context ? `[${context}]` : ''} ${message}`;
            console.log(`[LOG] ${new Date().toISOString()} ${fullMessage}`);
            this.writeToFile('log', fullMessage);
        }
    }
    error(message, trace, context) {
        if (this.shouldLog('error')) {
            const fullMessage = `${context ? `[${context}]` : ''} ${message}`;
            console.error(`[ERROR] ${new Date().toISOString()} ${fullMessage}`);
            if (trace)
                console.error(trace);
            this.writeToFile('error', `${fullMessage}${trace ? '\n' + trace : ''}`);
        }
    }
    warn(message, context) {
        if (this.shouldLog('warn')) {
            const fullMessage = `${context ? `[${context}]` : ''} ${message}`;
            console.warn(`[WARN] ${new Date().toISOString()} ${fullMessage}`);
            this.writeToFile('warn', fullMessage);
        }
    }
    debug(message, context) {
        if (this.shouldLog('debug')) {
            const fullMessage = `${context ? `[${context}]` : ''} ${message}`;
            console.debug(`[DEBUG] ${new Date().toISOString()} ${fullMessage}`);
            this.writeToFile('debug', fullMessage);
        }
    }
    verbose(message, context) {
        if (this.shouldLog('verbose')) {
            const fullMessage = `${context ? `[${context}]` : ''} ${message}`;
            console.log(`[VERBOSE] ${new Date().toISOString()} ${fullMessage}`);
            this.writeToFile('verbose', fullMessage);
        }
    }
    shouldLog(level) {
        const currentIndex = this.logLevels.indexOf(this.currentLevel);
        const messageIndex = this.logLevels.indexOf(level);
        return messageIndex <= currentIndex;
    }
};
exports.LoggingService = LoggingService;
exports.LoggingService = LoggingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggingService);
//# sourceMappingURL=logging.service.js.map