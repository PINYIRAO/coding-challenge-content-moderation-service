import express, { Express, Request, Response } from "express";
import moderationRoutes from "./api/v1/routes/moderationRoutes";
import helmetMiddleware from "./api/v1/middleware/helmet";
import helmet from "helmet";

const app: Express = express();

// app.use(helmet());
app.use(express.json());

/**
 * Mount moderation routes on /api/v1/moderation
 */
// app.use("/api/v1/moderation", moderationRoutes);
app.use("/api/v1/moderation", helmetMiddleware, moderationRoutes);
// app.use(
//   "/api/v1/moderation",
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
//   }),
//   moderationRoutes
// );

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
