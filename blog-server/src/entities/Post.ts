import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  postId: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  coverId: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  tags: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  html: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  summary: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
