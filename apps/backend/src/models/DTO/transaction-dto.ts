import {
  IsBoolean,
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

export class TransactionDTO {
  @IsNotEmpty()
  @Length(3, 25)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsIn(['income', 'expenses'])
  type: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsIn(['month', 'year', 'unique'])
  recurrence: string;

  @IsOptional()
  @IsBoolean()
  parcel: boolean;

  @IsOptional()
  @IsNumber()
  currentParcel: number;

  @IsOptional()
  @IsNumber()
  totalParcel: number;
}
