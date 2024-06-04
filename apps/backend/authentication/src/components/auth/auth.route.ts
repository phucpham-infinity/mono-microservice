import { FastifyInstance, RouteOptions } from 'fastify';
import { LoginUserSchema, GetUserSchema } from '@/components/auth/auth.schema';
import { authController } from './auth.controller';
import { UseRoutes } from '@/interfaces/routes.interface';

export const authRoutes: UseRoutes = () => {
  const path = '/auth';
  const initializeRoutes = (fastify: FastifyInstance, opts: RouteOptions, done: () => void) => {
    fastify.route({
      method: 'post',
      url: `${path}/login`,
      schema: LoginUserSchema,
      handler: authController().login
    });
    fastify.route({
      method: 'get',
      url: `${path}/info`,
      schema: GetUserSchema,
      handler: authController().info
    });
    done();
  };
  return { initializeRoutes, path };
};
