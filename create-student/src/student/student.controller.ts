import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly StudService:StudentService){}

    @Post()
    Create(@Body() CreateStudentDto: CreateStudentDto){
        return this.StudService.createStudent(CreateStudentDto);
    }
}
