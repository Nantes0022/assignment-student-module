import { StudentService } from './student.service';
export declare class StudentController {
    private readonly StudService;
    constructor(StudService: StudentService);
    remove(id: string): Promise<"ID Not Found" | import("./student.entity").student>;
}
