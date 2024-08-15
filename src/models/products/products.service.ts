import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  create(createProductDto: any) {
    return this.productModel.create(createProductDto);
  }

  async findAll(page: number = 1, limit: number = 5) {
    const { count, rows } = await this.productModel.findAndCountAll({
      limit,
      offset: (page - 1) * limit,
      order: [['createdAt', 'DESC']],
    });

    return {
      totalItems: count,
      items: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
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
