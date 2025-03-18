// External library imports
import { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { MiddlewareFunction, RequestData } from "../types/expressTypes";
// apply the default helmet security headers

const helmetOpts: {} = {
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'"],
    },
  },
  xPoweredBy: false,
  xXssProtection: true,
  referrerPolicy: {
    policy: ["origin"],
  },
};

const helmetMiddleware: MiddlewareFunction = helmet(helmetOpts);
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         "default-src": ["'self'"],
//       },
//     },
//     xPoweredBy: false,
//     xXssProtection: true,
//     referrerPolicy: {
//       policy: ["origin"],
//     },
//   });
// };

export default helmetMiddleware;
