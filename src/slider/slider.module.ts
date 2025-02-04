import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Slider } from './slider.model';

@Module({
  providers: [SliderService],
  controllers: [SliderController],
  imports: [
    SequelizeModule.forFeature([Slider]),
  ],
  exports: [
    SliderService
  ]
})
export class SliderModule {}
