import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepos: Repository<student>,
    ) {}

    async createStudent(createStudentDTO: CreateStudentDto){
        return await this.studentRepos.save(createStudentDTO);
    }
}
