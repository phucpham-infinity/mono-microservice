import { FastifyReply, FastifyRequest } from 'fastify';
import { LoginUser } from './auth.interface';
import { authService } from './auth.service';

export const authController = () => {
  const login = async (req: FastifyRequest<{ Body: LoginUser }>, reply: FastifyReply) => {
    const { email, password } = req.body;

    const data = await authService().loginUser({ email, password }, reply);

    return { data, message: 'login' };
  };

  const info = async (req: FastifyRequest<{ Body: LoginUser }>, reply: FastifyReply) => {
    return { message: 'info' };
  };
  return { login, info };
};
