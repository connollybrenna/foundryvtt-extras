const summon = CompanionManager.api.dnd5e.getSummonInfo(args, 0);
const health = args[0].assignedActor?.classes.artificer.system.levels * 5 + args[0].assignedActor?.data.data.abilities.int.mod + 2
return {
	actor: {
		"data.details.cr":args[0].assignedActor?.data.data.details.level,
		"data.attributes.hp.max": health,
		"data.attributes.hp.value": health,
	},
	embedded: {
		Item: {
			"Force-Empowered Rend":
			{
				"data.attackBonus": summon.attack.ms
			}
		}
	}
}