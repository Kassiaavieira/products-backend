import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  create(createProductDto: any) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.findAll();
  }

  findOne(id: number) {
    return this.productModel.findByPk(id);
  }

  update(id: number, updateProductDto: any) {
    return this.productModel.update(updateProductDto, { where: { id } });
  }

  remove(id: number) {
    return this.productModel.destroy({ where: { id } });
  }
}
