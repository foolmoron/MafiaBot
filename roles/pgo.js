var templates = require('./templates');

var self = templates.extend(templates.noAction, {
    id: 'pgo',
    name: 'Paranoid Gun Owner',
    description: `You have no active abilities, but you will shoot to death anyone who targets you at night.`,
    onActionPhase: (p) => {
        var actionsTargetingMe = _.filter(p.game.nightActions, {targetId: p.player.id});
        for (var i = 0; i < actionsTargetingMe.length; i++) {
            var action = actionsTargetingMe[i];
            p.game.nightKills[action.targetId] = (p.game.nightKills[action.targetId] || 0) + 1;
        }
    },
});
module.exports = self;