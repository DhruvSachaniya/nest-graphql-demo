import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pet {

    @Field(_type => Int)
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}