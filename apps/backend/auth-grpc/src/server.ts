import { fastify } from 'fastify';
//@ts-ignore
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import routes from './connect';
import { Code, ConnectError, createContextValues, type Interceptor } from '@connectrpc/connect';
import { kUser } from './user-context';

const logger: Interceptor = (next) => async (req) => {
  const token = req.header.get('Authorization');
  if (!token) {
    throw new ConnectError('User not authenticated', Code.Unauthenticated);
  }
  return await next(req);
};

async function main() {
  const server = fastify({ http2: true });
  await server.register(fastifyConnectPlugin, {
    routes,
    interceptors: [logger],
    contextValues: (req: any) => createContextValues().set(kUser, { name: 'Alice2' })
  });
  await server.listen({ host: 'localhost', port: 8080 });
  console.log('server is listening at', server.addresses());
}

void main();
