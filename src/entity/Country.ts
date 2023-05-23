import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  votes: number;
}

export default Country;