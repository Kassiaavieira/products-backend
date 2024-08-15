import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/products/product.model';
import { ProductsModule } from './models/products/products.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: (process.env.DB_DIALECT as any) || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'products_db',
      models: [Product],
      autoLoadModels: true,
      synchronize: false,
    }),
    ProductsModule,
  ],
})
export class AppModule {}
