import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// TypeOrmModule.forRoot({
//   type: 'postgres',
//   host: this.getValue('DB_HOST'),
//   port: parseInt(this.getValue('DB_PORT'), 10),
//   username: this.getValue('DB_USERNAME'),
//   password: this.getValue('DB_PASSWORD'),
//   database: this.getValue('DB_NAME'),
//   entities: ['**/*.entity{.ts,.js}'],
//   migrationsTableName: 'migration',
//   // migrations: ['src/migration/*.ts'],
//   cli: {
//     migrationsDir: 'src/migration',
//   },
//   // ssl: this.isProduction(),
// })

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
