import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  code: string;

  @Column()
  name: string;

  @Column()
  emoji: string;
}

export default Country;