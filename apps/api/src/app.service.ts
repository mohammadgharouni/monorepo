import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';
import { supabase } from 'supabase';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  @Query(() => String)
  async getHello(): Promise<string> {
    const user = await this.prisma.user.findFirst();
    const supabaseUser = await supabase.auth.getUser();
    console.log('user', user, supabaseUser);
    return 'Hello World!' + user.name;
  }
}
