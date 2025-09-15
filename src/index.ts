import fastify from 'fastify';
import { indexRoutes } from './routes/index.routes';

export const app = fastify();

app.register(indexRoutes)