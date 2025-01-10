import { student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentService {
    private readonly studentRepos;
    constructor(studentRepos: Repository<student>);
    createStudent(createStudentDTO: CreateStudentDto): Promise<CreateStudentDto & student>;
}
