import { Protocol } from './../common/decorators/protocol.decorator';
import { ParseIntPipe } from './../common/pipes/parse-int.pipe';
import { Public } from './../common/decorators/public.decorator';
import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res, SetMetadata } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService){}

      @Public()
      @Get()
      async findAll(@Protocol() protocol: string, @Query() paginationQuery: PaginationQueryDto) {
        console.log(protocol )
        //await new Promise(resolve => setTimeout(resolve, 5000));
        return this.coffeesService.findAll(paginationQuery);
      }

     @Get(':id')
     findOne(@Param('id',ParseIntPipe) id: string) {
        return this.coffeesService.findOne(id);
     }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
