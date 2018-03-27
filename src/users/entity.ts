import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
//'exclude' is an option that excludes the property from the transformed result, here from the classToPlain operation.
import { MinLength, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt'

export type Role = 'teacher' | 'admin'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @MinLength(8)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  //@IsString()
  @Column('text', {default: 'teacher'})
  role: Role

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }
}
