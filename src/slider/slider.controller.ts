import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { CreateSliderDto } from './dto/slider.dto';
import { SliderService } from './slider.service';

@Controller('slider')
export class SliderController {
    constructor(private sliderService: SliderService){}

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
    async uploadSlider(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateSliderDto
    ) {
        try {
            const imagePath = `/uploads/${file.filename}`

            return this.sliderService.createSlider({
                ...dto,
                image: imagePath,
            });
        } catch (error) {
            throw new InternalServerErrorException('Ошибка при создании слайдера')
        }
    }

    @Get()
    getAllSliders(){
        return this.sliderService.getAllSliders();
    }

    @Get(':id')
    getSliderById(@Param('id') id: number){
        return this.sliderService.getSliderById(id);
    }

    @Delete(':id')
    deleteSlider(@Param('id') id: number){
        return this.sliderService.deleteSlider(id);
    }
}
