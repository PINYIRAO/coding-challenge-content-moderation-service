// External library imports
import { Request, Response, NextFunction } from "express";
import cors from "cors";
// import { MiddlewareFunction, RequestData } from "../types/expressTypes";
// apply the default helmet security headers

const corsOpts: {} = {
  origin: [
    "http://localhost:3000",
    "https://content-manager.example.com",
    "https://moderator.example.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  Credentials: false,
  preflightContinue: true,
  maxAge: 86400, // 1day
};

const corsMiddleware = cors(corsOpts);
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

export default corsMiddleware;
