import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { LoggingService } from '../logging/logging.service';
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly loggingService;
    constructor(loggingService: LoggingService);
    catch(exception: unknown, host: ArgumentsHost): void;
}
