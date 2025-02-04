import { Table, Model, Column, DataType } from "sequelize-typescript";


interface DistrictCreationAttrs {
    name: string;
}

@Table({ tableName: 'distict' })
export class District extends Model<District, DistrictCreationAttrs>{

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
    id: number;

    @Column({ type: DataType.JSONB, allowNull: false })
    name: Record<string, string>

}