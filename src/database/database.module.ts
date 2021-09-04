import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
    if (connection.isConnected) {
      console.log('DB connection established successfully.');
    }
  }
}
