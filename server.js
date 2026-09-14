const fastify = require("fastify")();

fastify.get("/health", async () => ({ status: "ok" }));
fastify.get("/", async () => ({ service: "eval-fastify-min" }));

fastify.listen({ port: 8000, host: "0.0.0.0" });
