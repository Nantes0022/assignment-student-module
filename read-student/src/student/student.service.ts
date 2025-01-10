import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepos: Repository<student>,
    ) {}

    async findAll() {
      return await this.studentRepos.find();
    }
  
    async findOne(id: number) {
      const stud = await this.studentRepos.findOneBy({ id });
      if(!stud){
        return 'ID Not Found';
      }
      return stud;
    }
}
