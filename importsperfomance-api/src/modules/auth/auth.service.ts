import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { EmployeeService } from '../employee/employee.service';
import { Client } from '../client/entities/client.entity';
import { Employee } from '../employee/entities/employee.entity';
import { TokenExpiredError } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../../common/enums/role.enums';
import { HashService } from '../hash/hash.service';
import { PayloadDTO } from './dtos/payload.dto';
import { AccessTokenDTO } from './dtos/access.token.dto';
import { TokensDTO } from './dtos/tokens.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientService: ClientService,
    private readonly employeeService: EmployeeService,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
  ) {}

  public async validateUser(
    email: string,
    password: string,
    role: Role,
  ): Promise<Client | Employee> {
    let user: Client | Employee | null = null;

    if (role === Role.CLIENT) {
      user = await this.clientService.findClientByEmail(email);
    }

    if (role === Role.EMPLOYEE) {
      user = await this.employeeService.findEmployeeByEmail(email);
    }

    if (!user || !(await this.hashService.comparePass(password, user.password)))
      throw new UnauthorizedException('Invalid Credentials');

    return user;
  }

  public async signIn(
    email: string,
    password: string,
    role: Role,
  ): Promise<TokensDTO> {
    const user = await this.validateUser(email, password, role);
    const payload: PayloadDTO = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '15m',
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '60m',
      }),
    };
  }

  public async refresh(token: string): Promise<AccessTokenDTO> {
    try {
      const payload: PayloadDTO = await this.verifyAccessToken(token);
      const newAccessToken: string = await this.jwtService.signAsync(
        {
          id: payload.id,
          email: payload.email,
          role: payload.role,
        },
        {
          expiresIn: '15min',
        },
      );

      return { access_token: newAccessToken };
    } catch (error) {
      if (error instanceof TokenExpiredError)
        throw new UnauthorizedException('Session Expired');
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  public async verifyAccessToken(token: string): Promise<PayloadDTO> {
    try {
      return await this.jwtService.verifyAsync<PayloadDTO>(token);
    } catch (error) {
      if (error instanceof TokenExpiredError)
        throw new UnauthorizedException('Session Expired');
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
