import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ParcialUsuarioDto } from './dto/parcial-usuario.dto';
import { LogInterceptador } from 'src/interceptador/log.interceptador';

@UseInterceptors(LogInterceptador)
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, 
  @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Patch(':id')
  async parcial(@Param('id', ParseIntPipe) id: number, 
  @Body() parcialUsuarioDto: ParcialUsuarioDto) {
    return this.usuarioService.parcial(id, parcialUsuarioDto)
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
