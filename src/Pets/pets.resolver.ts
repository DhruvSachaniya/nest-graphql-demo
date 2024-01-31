import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entitiy';
import { CreatepetInput } from './dto/create.dto';

@Resolver(() => Pet)
export class PetsResolver {
    constructor(private petsservice: PetsService) {}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petsservice.findAll();
    }

    @Mutation(returns => Pet)
    createpet(@Args("createpetInput") createpetInput: CreatepetInput): Promise<Pet> {
        return this.petsservice.createpet(createpetInput);
    }

}
