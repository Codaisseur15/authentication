import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @MinLength(8)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

<<<<<<< HEAD
<<<<<<< HEAD
  // @IsString()
=======
  @IsString()
>>>>>>> 063434f8a88e0587a359a0d9a211308fa47b7030
=======
  //@IsString()
>>>>>>> 6a57e54b4fbbcf3932fd506d7fdd44fa4abc6e09
  @Column('text', {default: 'teacher'})
  role: string

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }
}
