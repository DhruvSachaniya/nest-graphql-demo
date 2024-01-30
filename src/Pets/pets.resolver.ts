import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entitiy';

@Resolver(() => Pet)
export class PetsResolver {
    constructor(private petsservice: PetsService) {}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petsservice.findAll();
    }

}
