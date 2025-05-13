import { Model, Table, Column, AllowNull, DefaultScope, DataType, Unique } from 'sequelize-typescript';
import { RELATIONS } from 'src/enums/beneficiaries.enum';

@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    modelName: 'Beneficiary',
    tableName: 'beneficiaries'
})
export class Beneficiary extends Model {
    @AllowNull(false)
    @Column(DataType.STRING(30))
    name: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(100))
    email: string;

    @AllowNull(false)
    @Column(DataType.ENUM(Object.values(RELATIONS)))
    relation: RELATIONS;

}