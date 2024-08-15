import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  description: string;
}
