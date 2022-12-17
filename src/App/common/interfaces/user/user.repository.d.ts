import { UserEntity } from "@Entities/user.entity"

export interface UserRepository {
    findOne: (matizeId: string) => Promise<UserEntity | null> 
    findByEmail: (email: string) => Promise<UserEntity>
    findAll: () => Promise<UserEntity[]>
    create: (user: CreateUserDto) => Promise<void>
    remove: (matizeId: string) => Promise<void>
    
}
