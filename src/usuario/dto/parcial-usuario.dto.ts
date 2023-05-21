import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioDto } from "./create-usuario.dto";

export class ParcialUsuarioDto extends PartialType(CreateUsuarioDto){}