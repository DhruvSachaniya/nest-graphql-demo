import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entitiy';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatepetInput } from './dto/create.dto';

@Injectable()
export class PetsService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<any> {
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

        return data;
    }

    async createpet(createpetInput: CreatepetInput): Promise<Pet> {
        const createpet = await this.prisma.pets.create({
            data: {
                name: createpetInput.name
            }
        })

        return createpet;
    }
}
