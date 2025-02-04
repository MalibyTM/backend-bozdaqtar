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

    @Column({ 
        type: DataType.JSONB, 
        allowNull: false 
    })
    author: Record<string, string>;

    @Column({ 
        type: DataType.JSONB, 
        allowNull: false 
    })
    content: Record<string, string>;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    image: string;
}