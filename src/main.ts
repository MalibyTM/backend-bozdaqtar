import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Backend')
        .setDescription('Backend - Bozdaqtar')
        .setVersion('1.0.0')
        .addTag('Bozdaqtar')
        .build()
    const documnet = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, documnet)

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()