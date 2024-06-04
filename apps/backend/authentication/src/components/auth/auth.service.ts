import { FastifyReply } from 'fastify';
import { LoginUser } from './auth.interface';

export const authService = () => {
  const loginUser = (loginData: LoginUser, reply: FastifyReply) => {
    return { accessToken: 'accessToken' };
  };

  return { loginUser };
};
