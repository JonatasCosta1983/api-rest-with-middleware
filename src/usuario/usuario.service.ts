import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ParcialUsuarioDto } from './dto/parcial-usuario.dto';

@Injectable()
export class UsuarioService {
  
  async create(data: CreateUsuarioDto) {
    return {data}
  }

  async findAll() {
    return {usuarios:[]};
  }

  async findOne(id: number) {
    return {id}
  }

  async update(id: number, data: UpdateUsuarioDto) {
    return {id, data}
  }

  async parcial(id: number, data: ParcialUsuarioDto) {
    return {id, data}
  }

  async remove(id: number) {
    return {id}
  }
}
