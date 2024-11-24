import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ParcelDTO {
  @IsOptional()
  @IsNumber()
  numberParcel: number;

  @IsNotEmpty()
  @IsNumber()
  valueParcel: number;

  @IsNotEmpty()
  @IsDate()
  expirationDate: Date;

  @IsNotEmpty()
  @IsString()
  @IsIn(['paid', 'pending', 'overdue'])
  status: string;
}
