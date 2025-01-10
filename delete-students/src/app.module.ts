import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { student } from './student/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'srv1365.hstgr.io',
      port: 3306,
      username: 'u926624511_jubert',
      password: 'Jubertnantes123',
      database: 'u926624511_ITEC116',
      entities: [student],  // Correct entity import (use capitalized class name)
      synchronize: true,
  }), StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
