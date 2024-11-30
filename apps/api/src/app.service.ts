import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  @Query(() => String)
  async getHello(): Promise<string> {
    const user = await this.prisma.user.findFirst();
    console.log('user', user);
    return 'Hello World!' + user.name;
  }
}
