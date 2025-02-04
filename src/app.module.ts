import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { BooksModule } from "./books/books.module";
import { Book } from "./books/books.model";
import { SliderModule } from "./slider/slider.module";
import { DistrictModule } from "./district/district.module";
import { Slider } from "./slider/slider.model";
import { District } from "./district/district.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Book, Slider, District], 
            autoLoadModels: true,
            synchronize: true,
          }),
        SequelizeModule.forFeature([Book]),
        BooksModule,
        SliderModule,
        DistrictModule,
    ]
})
export class AppModule {}