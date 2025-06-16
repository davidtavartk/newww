import { AppService } from './app.service';
import { LoggingService } from './common/logging/logging.service';
export declare class AppController {
    private readonly appService;
    private readonly loggingService;
    constructor(appService: AppService, loggingService: LoggingService);
    getHello(): string;
    testUncaught(): string;
    testRejection(): string;
}
