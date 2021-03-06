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

exports.getMaps = async(req, res) => {
    try {
        await fetch(`https://beatsaver.com/api/maps/hot/`, { headers: { 'User-Agent': 'Poopoo/1.0.0'}})
        .then(res => res.json())
        .then(json => {
            res.send({
                success: true,
                maps: json.docs
            });
        });
    } catch(error) {
        throw error;
    }
};
exports.getLatestMap = async(req, res) => {
    try {
        await fetch(`https://beatsaver.com/api/maps/latest/${req.params.page}`, { headers: { 'User-Agent': 'Poopoo/1.0.0' }})
        .then(res => res.json())
        .then(json => {
            res.send({
                success: true,
                maps: json.docs
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getPlaysMap = async(req, res) => {
    try {
        await fetch(`https://beatsaver.com/api/maps/plays/${req.params.page}`, { headers: { 'User-Agent': 'Poopoo/1.0.0' }})
        .then(res => res.json())
        .then(json => {
            res.send({
                success: true,
                maps: json.docs
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getMapsByPage = async(req, res) => {
    try {
        await fetch(`https://beatsaver.com/api/maps/hot/${req.params.page}`, { headers: { 'User-Agent': 'Poopoo/1.0.0' }})
        .then(res => res.json())
        .then(json => {
            res.send({
                success: true,
                maps: json.docs
            });
        });
    } catch(error) {
        throw error;
    }
};

exports.getMapById = async(req, res) => {
    try {
        await fetch(`https://beatsaver.com/api/maps/by-hash/${req.params.id}/`, { headers: { 'User-Agent': 'Poopoo/1.0.0'}})
        .then(res => res.json())
        .then(json => {
            res.send({
                success: true,
                maps: json
            });
        });
    } catch(error) {
        throw error;
    }
}

exports.getPlayer = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/full`)
        .then(res => res.json())
        .then(data => {
            res.send({
                success: true,
                playerInfo: data.playerInfo,
                stats: data.scoreStats
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

exports.getPlayerRecent = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/scores/recent`)
        .then(res => res.json())
        .then(scores => {
            res.send({
                success: true,
                scores: scores.scores
            });
        });
    } catch(error) {
        throw error;
    }
}

exports.getPlayerTop = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/player/${req.params.id}/scores/top`)
        .then(res => res.json())
        .then(scores => {
            res.send({
                success: true,
                scores: scores.scores
            });
        });
    } catch(error) {
        throw error;
    }
}

exports.getPlayers = async(req, res) => {
    try {
        await fetch(`https://new.scoresaber.com/api/players/`)
        .then(res => res.json()) 
        .then(players => {
            res.send({
                success: true,
                players: players.players
            });
        });
    } catch(error) {
        throw error;
    }
};