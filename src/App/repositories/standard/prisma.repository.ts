import { PrismaService } from "@Database/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class PrismaRepository {
    prisma: PrismaService
    
    abstract getEntity();

    constructor(prisma: PrismaService) {
        this.prisma = prisma
    }

    treatEntity(entity: object) {
        const entityClass = this.getEntity()
        return new entityClass(entity)
    }

    treatList(entities: object[]) {
        return entities.map(entity => this.treatEntity(entity))
    }

}
