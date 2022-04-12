import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { Event } from 'src/events/entities/event.entity';

export class MockCoffeesService { }
@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [CoffeesService]
})
export class CoffeesModule {}
