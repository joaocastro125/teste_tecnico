import { Model, DataTypes } from "sequelize";
import {sequelize} from '../instances/pg'


export  interface instenceProducts extends Model{
    id:number
    name:string
    cod:number
}
export const Products=sequelize.define<instenceProducts>('products',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,

    },
    cod:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'products',
    timestamps:false
})

