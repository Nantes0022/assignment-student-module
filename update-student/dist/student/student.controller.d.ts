import { StudentService } from './student.service';
export declare class StudentController {
    private readonly StudService;
    constructor(StudService: StudentService);
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<"ID not Found" | import("typeorm").UpdateResult>;
}
