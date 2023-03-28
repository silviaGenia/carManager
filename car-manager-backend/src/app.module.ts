import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { dbConfig } from './dbConfig';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [dbConfig, CarModule, UsuarioModule],
})
export class AppModule { }
