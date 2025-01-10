import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudService:StudentService){}

    @Put(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return this.StudService.update(+id, updateStudentDto);
    }
}
