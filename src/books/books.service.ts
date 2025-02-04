import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './books.model';
import { CreateBookDto } from './dto/books.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book) private bookRepository: typeof Book) {}

    async createBook(dto: CreateBookDto){
        try {
            const parsedAuthor = JSON.parse(dto.author);
            const parsedContent = JSON.parse(dto.content);
            
            const book = await this.bookRepository.create({
                ...dto,
                author: parsedAuthor,
                content: parsedContent,
            });
            return book;
        } catch(error) {
            throw new InternalServerErrorException("Ошибка при создании книги");
        }
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
