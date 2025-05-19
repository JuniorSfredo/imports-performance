import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private readonly salt: number = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt);
  }

  async comparePass(pass: string, hashedPass: string): Promise<boolean> {
    return bcrypt.compare(pass, hashedPass);
  }
}
