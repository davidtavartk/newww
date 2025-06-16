"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const logging_service_1 = require("./common/logging/logging.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const loggingService = app.get(logging_service_1.LoggingService);
    process.on('uncaughtException', (error) => {
        loggingService.error(`Uncaught Exception: ${error.message}`, error.stack, 'Process');
        process.exit(1);
    });
    process.on('unhandledRejection', (reason, promise) => {
        loggingService.error(`Unhandled Rejection at Promise: ${promise} - Reason: ${reason}`, reason === null || reason === void 0 ? void 0 : reason.stack, 'Process');
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(loggingService));
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(loggingService));
    app.enableCors();
    const port = process.env.PORT || 4000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map