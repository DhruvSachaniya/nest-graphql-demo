import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entitiy';

@Injectable()
export class PetsService {
    constructor() {}

    async findAll(): Promise<Pet[]> {
        const pet = new Pet();

        pet.id = 1;
        pet.name = "Mambo";

        pet.id = 2;
        pet.name = "silver ock";

        return [pet];
    }
}
