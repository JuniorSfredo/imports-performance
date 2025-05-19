import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDTO } from './dtos/user.login.dto';
import { AuthenticatedRequest } from '../../common/types/authenticated.request';
import { JwtAuthGuard } from './guards/jwt.auth.guards';
import { TokensDTO } from './dtos/tokens.dto';
import { PayloadDTO } from './dtos/payload.dto';
import { AccessTokenDTO } from './dtos/access.token.dto';
import { Response, Request } from 'express';
import { AuthCookies } from '../../common/types/auth.cookies';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  public async signIn(
    @Body() userDTO: UserLoginDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<TokensDTO> {
    const { email, password, role } = userDTO;
    const tokens: TokensDTO = await this.authService.signIn(
      email,
      password,
      role,
    );

    res.cookie('refreshToken', tokens.refresh_token, {
      httpOnly: false,
      secure: true, // ONLY IN DEV
      sameSite: 'none', // ONLY IN DEV
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return tokens;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Req() req: AuthenticatedRequest): PayloadDTO {
    return req.user;
  }

  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  public async refresh(@Req() req: Request): Promise<AccessTokenDTO> {
    const cookies = req.cookies as AuthCookies;
    const token: string = cookies['refreshToken'];

    if (!token) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return await this.authService.refresh(token);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  public logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken: string = req.cookies['refreshToken'] as string;
    if (!refreshToken) {
      throw new UnauthorizedException('Invalid Token');
    }

    console.log(refreshToken);

    res.clearCookie('refreshToken', {
      httpOnly: false,
      secure: true, // ONLY IN DEV
      sameSite: 'none', // ONLY IN DEV
    });

    return;
  }
}
