import Fastify, { FastifyError, FastifyInstance } from 'fastify';
import ajvErrors from 'ajv-errors';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import fastifyCompress from '@fastify/compress';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastifyJwt from '@fastify/jwt';
import fastifyEnv from '@fastify/env';
import { schema } from '@/utils/validateEnv';
import { API_VERSION, CREDENTIALS, NODE_ENV, ORIGIN, PORT, SECRET_KEY } from '@/config';
import { initSwagger } from '@/plugins/swagger';
import { schemaErrorFormatter } from '@/utils/schemaErrorFormatter';
import { initializeRoutes } from '@/plugins/initializeRoute';

import { authRoutes } from '@/components/auth/auth.route';

const start = () => {
  const app = Fastify({
    schemaErrorFormatter,
    ajv: {
      customOptions: {
        coerceTypes: false,
        allErrors: true
      },
      plugins: [ajvErrors]
    },
    logger: true
  }).withTypeProvider<TypeBoxTypeProvider>();

  const env = NODE_ENV ?? 'development';
  const port = Number(PORT) ?? 3001;

  const listen = async () => {
    try {
      await app.listen({ port });
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };

  const getServer = () => app;

  const initializePlugins = () => {
    app.register(fastifyEnv, { dotenv: true, schema });
    app.register(fastifyCors, { origin: ORIGIN, credentials: CREDENTIALS === 'true' });
    app.register(fastifyHelmet);
    app.register(fastifyCompress);
    app.register(fastifyJwt, { secret: SECRET_KEY ?? '' });
    app.register(initSwagger);
  };

  const initializeErrorHandling = () => {
    app.setErrorHandler((error: FastifyError, request, reply) => {
      const status: number = error.statusCode ?? 500;
      const message: string = status === 500 ? 'Something went wrong' : error.message ?? 'Something went wrong';

      app.log.error(`[${request.method}] ${request.url} >> StatusCode:: ${status}, Message:: ${message}`);

      return reply.status(status).send({ error: true, message });
    });
  };

  const initializeRouter = () => {
    app.register(initializeRoutes([authRoutes()]), { prefix: `api/${API_VERSION}` });
  };

  const init = () => {
    initializePlugins();
    initializeErrorHandling();
    initializeRouter();
    return { getServer, listen };
  };

  return init();
};

const app = start();
export default app;
