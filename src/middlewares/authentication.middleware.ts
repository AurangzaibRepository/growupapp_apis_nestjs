import { Request, Response, NextFunction } from 'express';

export function AuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next();
}
