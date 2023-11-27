import {
  Controller,
  Get,
  Headers,
  Logger,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login')
  async login(@Headers('Authorization') token: string): Promise<boolean> {
    return await this.authService.login(token);
  }

  @Get('/')
  async oauth(
    @Query('code') code: string,
    @Query('error') error: string,
    @Query('state') state: string,
    @Query('error_description') desc: string,
    @Query('app_key') appKey: string,

    @Res() response: Response,
  ) {
    if (error) {
      Logger.log(`Error while kakao auth. ${error}: ${state} ${desc} `);
      return desc;
    }

    Logger.log(`##### ${appKey}`);

    const redirectUri = await this.authService.oauth(code);
    // return response.redirect(redirectUri);
    return response.redirect(redirectUri);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  async test(@Req() req) {
    Logger.log(req);
  }
}
