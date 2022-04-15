import { IsPositive } from 'class-validator';
import { IsOptional } from 'class-validator';
export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    limit: number;
  
    @IsOptional()
    @IsPositive()
    offset: number;
  }