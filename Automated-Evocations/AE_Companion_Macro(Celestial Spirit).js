const summon = CompanionManager.api.dnd5e.getSummonInfo(args, 5);
return {
	actor: {
		"data.attributes.hp.max":summon.level*10 + 40 || 40,
		"data.attributes.hp.value":summon.level*10 + 40 || 40,
		"data.attributes.ac.flat":args[0].spellLevel + 11 || 16,
		"data.details.cr":args[0].assignedActor?.data.data.details.level
	},
	embedded: {
		Item: {
			"Multiattack": {
			"data.description.value": '<p>The celestial makes a number of attacks equal to half this spell’s level (rounded down). Number of attacks: </p>' + Math.floor(args[0].spellLevel/2).toString()
			},
			"Radiant Bow (Avenger Only)":
				{
				"data.description.value": `Ranged Weapon Attack: (+${summon.attack.ms}) to hit, range 150/600 ft., one target. Hit: 2d6 + 2 + ${args[0].spellLevel} radiant damage.`,
				"data.attackBonus": summon.attack.ms,
				"data.damage.parts":
					[
						[`2d6 + 2 + ${args[0].spellLevel || 5}`,"radiant"]
					]
				},
				"Radiant Mace (Defender Only)":
				{
				"data.description.value": `Melee Weapon Attack: (+${summon.attack.ms}) to hit, range 5 ft., one target. Hit: 1d10 + 3 + ${args[0].spellLevel} radiant damage.`,
				"data.attackBonus": summon.attack.ms,
				"data.damage.parts":
					[
						[`1d10 + 3 ${args[0].spellLevel || 5}`,"radiant"]
					]
				},
				"Healing Touch (1/Day)":
				{
				"data.description.value": `The celestial touches another creature. The target magically regains hit points equal to 2d8 + ${args[0].spellLevel}`,
				"data.damage.parts":
					[
						[`1d10 + 3 + ${args[0].spellLevel || 5}`,"healing"]
					]
				},
		}
	}
}