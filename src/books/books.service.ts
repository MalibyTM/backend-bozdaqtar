import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './books.model';
import { CreateBookDto } from './dto/books.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book) private bookRepository: typeof Book) {}

    async createBook(dto: CreateBookDto){
        const book = await this.bookRepository.create(dto)
        return book;
    }

    async getAllBooks(){
        const book = await this.bookRepository.findAll();
        return book;
    }

    async getBookById(id: number) {
        const book = await this.bookRepository.findByPk(id);
        return book;
    }

    async deleteBook(id: number) {
        const book = await this.bookRepository.destroy({
            where: {
                id
            }
        });
        return book;
    }
}
