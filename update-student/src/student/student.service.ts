import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from './student.entity';
import { Repository } from 'typeorm';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepos: Repository<student>,
    ) {}

    async update(id: number, updateStudentDto: UpdateStudentDto) {
        const stud = await this.studentRepos.findOneBy({ id });
        if(!stud){
          return "ID not Found";
        }
        return await this.studentRepos.update(id, updateStudentDto);
      }
}
