import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './district.model';
import { CreateDistrictDto } from './dto/district.dto';

@Injectable()
export class DistrictService {
    constructor(@InjectModel(District) private districtRepository: typeof District){}

    async createDistrict(dto: CreateDistrictDto){
        const district = await this.districtRepository.create(dto);
        return district;
    }

    async getAllDistrict(){
        const district = await this.districtRepository.findAll();
        return district;
    }

    async getDistrictById(id: number){
        const district = await this.districtRepository.findByPk(id);
        return district;
    }

    async deleteDistrict(id: number){
        const district = await this.districtRepository.destroy({where: {id}});
        return district;
    }
}
