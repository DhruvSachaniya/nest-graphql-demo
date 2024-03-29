import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './Pets/pets.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PetsModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), 
  ConfigModule.forRoot({
    isGlobal: true
  })
  , PrismaModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
