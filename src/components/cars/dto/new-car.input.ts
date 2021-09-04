import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000, { message: 'Daily price above minimum required amount.' })
  @Min(1500, { message: 'Daily price below minimum required amount.' })
  dailyPrice: number;

  @Field((type) => Int)
  @Max(1000, { message: 'Monthly price above minimum required amount.' })
  @Min(10, { message: 'Monthly price below minimum required amount.' })
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
