import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        createdAt: number;
        updatedAt: number;
    }[]>;
    getUserById(id: string): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    createUser(createUserDto: CreateUserDto): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    updatePassword(id: string, updatePasswordDto: UpdatePasswordDto): Promise<{
        createdAt: number;
        updatedAt: number;
    }>;
    deleteUser(id: string): Promise<void>;
}
