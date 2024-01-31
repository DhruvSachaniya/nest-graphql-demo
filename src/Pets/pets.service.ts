import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entitiy';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetsService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Pet[]> {
        // const pet = new Pet();

        // pet.id = 1;
        // pet.name = "Mambo";

        // pet.id = 2;
        // pet.name = "silver ock";
        const data = await this.prisma.pets.findMany();

        const pet = new Pet();

        if(data) {
            data.forEach((i) => {
                pet.id = i.id
                pet.name = i.name
            })
        }

        // {pet.id, pet.name} = data; 

        return [pet];
    }
}
