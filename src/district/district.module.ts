import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './district.model';

@Module({
  providers: [DistrictService],
  controllers: [DistrictController],
  imports: [
    SequelizeModule.forFeature([District]),
  ],
  exports: [
    DistrictService
  ]
})
export class DistrictModule {}
