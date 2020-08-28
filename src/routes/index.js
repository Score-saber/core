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
    {
        method: 'GET',
        url: '/player/:id/recent',
        handler: Controller.getPlayerRecent
    },
    {
        method: 'GET',
        url: '/player/:id/recent/',
        handler: Controller.getPlayerRecent
    },
    {
        method: 'GET',
        url: '/player/:id/top',
        handler: Controller.getPlayerTop
    },
    {
        method: 'GET',
        url: '/player/:id/top/',
        handler: Controller.getPlayerTop
    },
    {
        method: 'GET',
        url: '/players',
        handler: Controller.getPlayers
    },
    {
        method: 'GET',
        url: '/players/',
        handler: Controller.getPlayers
    },
    {
        method: 'GET',
        url: '/maps',
        handler: Controller.getMaps
    },
    {
        method: 'GET',
        url: '/maps/',
        handler: Controller.getMaps
    },
    {
        method: 'GET',
        url: '/map/:id',
        handler: Controller.getMapById
    },
    {
        method: 'GET',
        url: '/map/:id/',
        handler: Controller.getMapById
    },
    {
        method: 'GET',
        url: '/maps/:page',
        handler: Controller.getMapsByPage
    },
    {
        method: 'GET',
        url: '/maps/:page/',
        handler: Controller.getMapsByPage
    },
    {
        method: 'GET',
        url: '/maps/latest/:page',
        handler: Controller.getLatestMap
    },
    {
        method: 'GET',
        url: '/maps/plays/:page',
        handler: Controller.getPlaysMap
    }
];

module.exports = routes;