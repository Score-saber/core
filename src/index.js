const server = require('fastify')({ logger: false, http2: false});
const routes = require('./routes');

(async () => {
    try {
        await server.listen(
            80,
            '0.0.0.0',
            function(error, address) {
                if(error) {
                    throw error;
                }
                console.log(`API Online on at ${address}`);
            }
        );

        routes.forEach((route, index) => {
            server.route(route);
        });
    } catch(error) {
        throw error;
    }
})();