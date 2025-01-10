import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudService:StudentService){}

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.StudService.remove(+id);
    }
    }
