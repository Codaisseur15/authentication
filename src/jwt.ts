import * as jwt from 'jsonwebtoken'

export const secret = process.env.JWT_SECRET || '9u8nnjksfdt98*(&*%T$#hsfjk'
const expires = 3600 * 3 // our JWT tokens are valid for 3 hours

interface JwtPayload {
  id: number;
  role: string;
}

export const sign = (data: JwtPayload) =>
  jwt.sign(data, secret, { expiresIn: expires })

export const verify = (token: string): JwtPayload =>
  jwt.verify(token, secret) as JwtPayload
