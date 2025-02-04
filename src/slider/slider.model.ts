import { Table, Model, Column, DataType } from "sequelize-typescript";


interface SliderCreationAttrs {
    image: string;
}

@Table({ tableName: 'slider'})
export class Slider extends Model<Slider, SliderCreationAttrs>{

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

}