import { StudentService } from './student.service';
export declare class StudentController {
    private readonly StudService;
    constructor(StudService: StudentService);
    findAll(): Promise<import("./student.entity").student[]>;
    findOne(id: string): Promise<import("./student.entity").student | "ID Not Found">;
}
