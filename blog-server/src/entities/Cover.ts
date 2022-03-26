import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cover')
export class Cover extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  coverId: string;

  @Column('text')
  name: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  image: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
