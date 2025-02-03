import { Column, DataType, Table, Model } from "sequelize-typescript";

interface BookCreationAttrs {
    author: string;
    content: string;
    image: string;
}

@Table({ tableName: 'books' })
export class Book extends Model<Book, BookCreationAttrs> {

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true, })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    author: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    content: string;

    @Column({ type: DataType.STRING, allowNull: true })
    image: string;
}