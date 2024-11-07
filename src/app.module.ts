import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
