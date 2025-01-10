import { student } from './student.entity';
import { Repository } from 'typeorm';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private readonly studentRepos;
    constructor(studentRepos: Repository<student>);
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<"ID not Found" | import("typeorm").UpdateResult>;
}
