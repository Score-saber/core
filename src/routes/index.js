const Controller = require('./Controller');

const routes = [
    {
        method: 'GET',
        url: '/',
        handler: Controller.root
    },
    {
        method: 'GET',
        url: '/player/:id',
        handler: Controller.getPlayer
    },
    {
        method: 'GET',
        url: '/player/:id/',
        handler: Controller.getPlayer
    },
    {
        method: 'GET',
        url: '/player/:id/avatar',
        handler: Controller.getPlayerAvatar
    },
    {
        method: 'GET',
        url: '/player/:id/avatar/',
        handler: Controller.getPlayerAvatar
    },
    {
        method: 'GET',
        url: '/player/:id/pp',
        handler: Controller.getPlayerPP
    },
    {
        method: 'GET',
        url: '/player/:id/pp/',
        handler: Controller.getPlayerPP
    },
    {
        method: 'GET',
        url: '/player/:id/rank',
        handler: Controller.getPlayerRank
    },
    {
        method: 'GET',
        url: '/player/:id/rank/',
        handler: Controller.getPlayerRank
    },
    {
        method: 'GET',
        url: '/player/:id/countryRank',
        handler: Controller.getPlayerCountryRank
    },
    {
        method: 'GET',
        url: '/player/:id/countryRank/',
        handler: Controller.getPlayerCountryRank
    },
    {
        method: 'GET',
        url: '/player/:id/role',
        handler: Controller.getPlayerRole
    },
    {
        method: 'GET',
        url: '/player/:id/role/',
        handler: Controller.getPlayerRole
    },
    {
        method: 'GET',
        url: '/player/:id/badges',
        handler: Controller.getPlayerBadges
    },
    {
        method: 'GET',
        url: '/player/:id/badges/',
        handler: Controller.getPlayerBadges
    },
    {
        method: 'GET',
        url: '/player/:id/accuracy',
        handler: Controller.getPlayerAccuracy
    },
    {
        method: 'GET',
        url: '/player/:id/accuracy/',
        handler: Controller.getPlayerAccuracy
    },
];

module.exports = routes;