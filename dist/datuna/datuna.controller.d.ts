import { DatunaService } from './datuna.service';
import { CreateDatunaDto } from './dto/create-datuna.dto';
import { UpdateDatunaDto } from './dto/update-datuna.dto';
export declare class DatunaController {
    private readonly datunaService;
    constructor(datunaService: DatunaService);
    create(createDatunaDto: CreateDatunaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDatunaDto: UpdateDatunaDto): string;
    remove(id: string): string;
}
