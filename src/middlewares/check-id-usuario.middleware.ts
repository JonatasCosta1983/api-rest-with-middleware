import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class CheckIdUsuarioMiddleware  implements NestMiddleware{
    use(requicisao: Request, resposta: Response, proximo: NextFunction) {
        
        console.log("Middleware antes");
        
    if (isNaN(Number(requicisao.params.id)) || Number(requicisao.params.id) <= 0) {
        throw new BadRequestException(`${requicisao.params.id} não é um parametro aceitavel`)
      }
    proximo();
    console.log("Middleware depois");
    console.log("-------------------------");
    


}}