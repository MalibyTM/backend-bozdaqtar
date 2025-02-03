import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/books.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Post()
    createBook(@Body() dto: CreateBookDto){
        return this.booksService.createBook(dto);
    }

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
}
