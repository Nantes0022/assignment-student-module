import { student } from './student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private readonly studentRepos;
    constructor(studentRepos: Repository<student>);
    findAll(): Promise<student[]>;
    findOne(id: number): Promise<student | "ID Not Found">;
}
