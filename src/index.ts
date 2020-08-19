import fastify from 'fastify';
import { AuthRoutes } from './routes';
import { token } from './Config';
import Client from './client/ScoreSaberBot';

const server = fastify();
const client: Client = new Client({ token });

server.register(AuthRoutes);
server.listen(80, '0.0.0.0', () => console.log(`API Online`));

client.start();