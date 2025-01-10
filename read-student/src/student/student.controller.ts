import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudService:StudentService){}

    @Get()
    findAll() {
        return this.StudService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.StudService.findOne(+id);
    }
}
