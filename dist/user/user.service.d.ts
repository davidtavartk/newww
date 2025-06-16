import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<{
        createdAt: number;
        updatedAt: number;
    }[]>;
    getUserById(id: string): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    getUserByIdRaw(id: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    createRaw(createUserDto: CreateUserDto): Promise<User>;
    updatePassword(id: string, updatePasswordDto: UpdatePasswordDto): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    remove(id: string): Promise<boolean>;
    getUserByLoginRaw(login: string): Promise<User>;
}
