import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module.js';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Raif10', // Replace with your actual password
      database: 'product_inventory_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}