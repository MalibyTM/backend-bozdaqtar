import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { SliderModule } from './slider/slider.module';
import { BooksModule } from './books/books.module';
import { SourcesModule } from './sources/sources.module';
import { DistrictModule } from './district/district.module';
import { RolesModule } from './roles/roles.module';
import { RequestsModule } from './requests/requests.module';
import { FilesModule } from './files/files.module';


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
            models: [], // Сюда пишутся модели
            autoLoadModels: true
          }),
        SliderModule,
        BooksModule,
        SourcesModule,
        DistrictModule,
        RolesModule,
        RequestsModule,
        FilesModule,
    ]
})
export class AppModule {}