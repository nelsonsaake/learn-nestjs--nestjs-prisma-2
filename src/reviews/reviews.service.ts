import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(reviewCreateInput: Prisma.ReviewCreateInput) {
    return this.databaseService.review.create({ data: reviewCreateInput });
  }

  async findAll() {
    return this.databaseService.review.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.review.findUnique({
      where: {
        id
      },
    });
  }

  async update(id: number, reviewUpdateInput: Prisma.ReviewUpdateInput) {
    return this.databaseService.review.update({
      where: { id },
      data: reviewUpdateInput,
    });
  }

  async remove(id: number) {
    return this.databaseService.review.delete({
      where: { id }
    });
  }
}
