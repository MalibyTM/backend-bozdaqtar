import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/books.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { diskStorage } from 'multer';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get()
    getAllBooks(){
        return this.booksService.getAllBooks();
    }

    @Get(':id')
    getBookById(@Param('id') id: number){
        return this.booksService.getBookById(id);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: number){
        return this.booksService.deleteBook(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: '.uploads',
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + extname(file.originalname);
                cb(null, uniqueName);
            }
        })
    }))
    async uploadBook(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateBookDto
    ) {
        try {
    
            const imagePath = `/uploads/${file.filename}`;
    
            return this.booksService.createBook({
                ...dto,
                image: imagePath
            });
    
        } catch (error) {
            throw new InternalServerErrorException('Ошибка при создании книги');
        }
    }
    
}
