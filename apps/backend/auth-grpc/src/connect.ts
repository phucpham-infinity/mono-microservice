import type { ConnectRouter, HandlerContext, MethodImpl, ServiceImpl } from '@connectrpc/connect';
import { GreeterService, SayHelloRequest, SayHelloResponse } from '@repo/grpc/gen';
import { kUser } from 'user-context';

export default (router: ConnectRouter) =>
  //@ts-ignore
  router.service(GreeterService, {
    async sayHello(req: SayHelloRequest, ctx: HandlerContext) {
      const user = ctx.values.get(kUser);
      return new SayHelloResponse({
        message: `${user.name}: You said ${req.name}`
      });
    }
  });
