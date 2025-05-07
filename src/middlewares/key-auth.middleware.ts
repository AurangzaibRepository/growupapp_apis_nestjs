import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { HTTPSTATUS } from 'src/enums/http-status.enum';

@Injectable()
export class KeyAuthMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const api_key = req.headers['api_key'];

    if (
      !api_key ||
      api_key !== this.configService.get<string>('auth.api_key')
    ) {
      return res.status(HTTPSTATUS.Unauthorized).json({
        message: 'Unauthorized access',
      });
    }

    next();
  }
}