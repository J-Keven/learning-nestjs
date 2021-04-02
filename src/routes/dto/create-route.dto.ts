import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class IPosition {
  @IsNumber()
  @IsNotEmpty()
  lat: number;
  @IsNumber()
  @IsNotEmpty()
  lng: number;
}

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @ValidateNested()
  startPosition: IPosition;
  @ValidateNested()
  endPosition: IPosition;
}
