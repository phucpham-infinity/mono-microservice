import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { FastifyPluginOptions } from 'fastify';
import { Routes } from '@/interfaces/routes.interface';

export const initializeRoutes: (routes: Routes[]) => FastifyPluginCallbackTypebox<FastifyPluginOptions> =
  (routes = []) =>
  (server, options, done) => {
    // add the new routes here
    routes.forEach((route: Routes) => {
      server.register(route.initializeRoutes.bind(route));
    });
    done();
  };
