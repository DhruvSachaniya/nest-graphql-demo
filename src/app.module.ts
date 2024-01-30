import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './Pets/pets.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [PetsModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
