import { student } from './student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private readonly studentRepos;
    constructor(studentRepos: Repository<student>);
    remove(id: number): Promise<"ID Not Found" | student>;
}
