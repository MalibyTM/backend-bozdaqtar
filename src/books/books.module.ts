import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './books.model';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [
    SequelizeModule.forFeature([Book]),
  ],
  exports: [
    BooksService
  ]
})
export class BooksModule {}
