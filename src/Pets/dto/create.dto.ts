import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreatepetInput {
    
    @Field()
    name: string

    @Field({nullable: true})
    type?: string
}