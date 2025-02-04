import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Slider } from './slider.model';
import { CreateSliderDto } from './dto/slider.dto';

@Injectable()
export class SliderService {
    constructor(@InjectModel(Slider) private sliderRepository: typeof Slider){}

    async createSlider(dto: CreateSliderDto){
        const slider = await this.sliderRepository.create(dto)
        return slider;
    }

    async getAllSliders(){
        const slider = await this.sliderRepository.findAll()
        return slider;
    }

    async getSliderById(id: number){
        const slider = await this.sliderRepository.findByPk(id)
        return slider;
    }

    async deleteSlider(id: number){
        const slider = await this.sliderRepository.destroy({where: {id}})
        return slider;
    }

}
