import {
    FastifyInstance,
    RegisterOptions
} from 'fastify';

export function AuthRoutes(server: FastifyInstance, _options: RegisterOptions, next?: () => void): void {
    /**
     * * Root route
     */
    server.get('/', async(req, res) => {
        res.send({
            success: true
        });
    });
};