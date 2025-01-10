import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentController {
    private readonly StudService;
    constructor(StudService: StudentService);
    Create(CreateStudentDto: CreateStudentDto): Promise<CreateStudentDto & import("./student.entity").student>;
}
