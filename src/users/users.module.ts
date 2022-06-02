import { Module } from '@nestjs/common';
import { UsersService } from './domain/services/users.service';
import { UsersController } from './interface/rest/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infraestructure/persistence/entities/user.entity';
import { UsersEntityRepository } from './infraestructure/persistence/repositories/users.repository';
import { USERS_REPOSITORY } from './domain/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    { useClass: UsersEntityRepository, provide: USERS_REPOSITORY },
    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
