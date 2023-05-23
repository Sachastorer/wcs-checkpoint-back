import { MaxLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;
}

@InputType()
export class CountryInput {
  @Field()
  @MaxLength(100)
  code: string;

  @Field()
  @MaxLength(100)
  name: string;

  @Field()
  @MaxLength(100)
  emoji: string;
}

export default Country;
