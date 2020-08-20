const fetch = require('node-fetch');

exports.root = async(req, res) => {
    try {
        res.send({
            success: true
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayer = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                data
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerAvatar = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                avatar: `https://new.scoresaber.com${data.playerInfo.avatar}`
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerPP = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                pp: `${data.playerInfo.pp}`
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerRank = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                rank: `${data.playerInfo.rank}`
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerCountryRank = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                countryRank: `${data.playerInfo.countryRank}`
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerRole = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                role: `${data.playerInfo.role}`
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerBadges = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            let badge = data.playerInfo.badges;

            res.send({
                success: true,
                badges: badge
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlayerAccuracy = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            let acc = Math.round(data.scoreStats.averageRankedAccuracy);
            res.send({
                success: true,
                accuracy: `${acc}%`
            });
        });
    } catch(error) {
        throw error;
    }
};