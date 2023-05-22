import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CheckIdUsuarioMiddleware } from 'src/middlewares/check-id-usuario.middleware';

@Module({
  imports:[PrismaModule],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckIdUsuarioMiddleware).forRoutes({
      path: 'usuarios/:id',
      method: RequestMethod.ALL
    })
  }
}
