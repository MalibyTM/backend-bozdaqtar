import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/district.dto';

@Controller('district')
export class DistrictController {
    constructor(private districtService: DistrictService){}


    @Post()
    createDistrict(@Body() dto: CreateDistrictDto){
        return this.districtService.createDistrict(dto);
    }

    @Get()
    getAllDistrict(){
        return this.districtService.getAllDistrict();
    }

    @Get(':id')
    getDistrictById(@Param('id') id: number){
        return this.districtService.getDistrictById(id);
    }

    @Delete(':id')
    deleteDistrict(@Param('id') id: number){
        return this.districtService.deleteDistrict(id);
    }
}
