import { CreateDatunaDto } from './dto/create-datuna.dto';
import { UpdateDatunaDto } from './dto/update-datuna.dto';
export declare class DatunaService {
    create(createDatunaDto: CreateDatunaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDatunaDto: UpdateDatunaDto): string;
    remove(id: number): string;
}
