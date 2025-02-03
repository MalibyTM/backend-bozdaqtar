import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';

@Module({
  providers: [SliderService],
  controllers: [SliderController]
})
export class SliderModule {}
