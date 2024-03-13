import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(productCreateInput: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({ data: productCreateInput });
  }

  async findAll() {
    return this.databaseService.product.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id
      },
      include: {
        description: true,
        tags: true,
        reviews: true
      }
    });
  }

  async update(id: number, productUpdateInput: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where: { id },
      data: productUpdateInput,
    });
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: { id }
    });
  }
}
