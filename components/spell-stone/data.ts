// Game facts for the Spell & Stone product page, sourced from the game's
// docs/STORE.md and game/data/*.json. Keep in step with the shipping build.

export const ASSETS = '/img/spell-stone'

export const stats = [
    { value: '24', label: 'Campaign maps' },
    { value: '72', label: 'Missions' },
    { value: '8',  label: 'Heroes' },
    { value: '21', label: 'Kinds of enemy' },
    { value: '4',  label: 'Tower lines' },
    { value: '3',  label: 'Difficulties' },
]

export type Hero = {
    id: string
    name: string
    title: string
    color: string
    role: string
    hitsAir: boolean
    special: string
    specialText: string
    description: string
}

export const heroes: Hero[] = [
    {
        id: 'brannoc', name: 'Brannoc', title: 'the Stonewarden', color: '#c9873a',
        role: 'Melee · Blocks 3', hitsAir: false, special: 'Stone Bulwark',
        specialText: 'Slams his shield into the ground, stunning nearby ground enemies, then takes 50% less damage for a few seconds.',
        description: 'A mountain-born guardian clad in runed stone plate. Slow but nearly unbreakable, he holds the road against three foes at once.',
    },
    {
        id: 'lyra', name: 'Lyra', title: 'Swiftbow', color: '#4f9c63',
        role: 'Ranged · Arrow', hitsAir: true, special: 'Hawk Volley',
        specialText: 'Her hawk marks a target and a rain of arrows strikes everything around it, ground and air.',
        description: 'A ranger of the Thornwood with unmatched speed and aim. Fragile up close, deadly at range, and she can hit flyers.',
    },
    {
        id: 'ignis', name: 'Ignis', title: 'the Embersage', color: '#e0582b',
        role: 'Ranged · Fire', hitsAir: true, special: 'Pillar of Flame',
        specialText: 'Summons a roaring column of fire that scorches everything inside it.',
        description: 'A fire mage who left the academy to burn back the dark. His fireballs explode on impact and reach flyers.',
    },
    {
        id: 'torvak', name: 'Torvak', title: 'the Thunderhorn', color: '#4a7fc0',
        role: 'Melee · Blocks 2', hitsAir: false, special: 'Thunder Leap',
        specialText: 'Leaps to the chosen spot and lands with a thunderclap that damages and stuns nearby ground enemies.',
        description: 'A storm-born berserker of the high peaks. He wades in with his great axe, hits hard and holds two foes at once.',
    },
    {
        id: 'thessa', name: 'Thessa', title: 'the Frostwarden', color: '#5fb8e0',
        role: 'Ranged · Frost', hitsAir: true, special: 'Glacial Nova',
        specialText: 'A burst of bitter cold that damages and freezes every enemy in the area, ground and air.',
        description: 'A sorceress of the frozen north. Her ice shards chill what they hit and reach flyers, buying time for your towers.',
    },
    {
        id: 'seraphine', name: 'Seraphine', title: 'the Dawnbringer', color: '#e8b84a',
        role: 'Ranged · Holy', hitsAir: true, special: 'Sanctuary',
        specialText: 'Blesses the ground with holy light that heals your hero and soldiers inside it while searing enemies.',
        description: 'A priestess of the sun whose radiant bolts pierce any armour. She keeps your soldiers fighting long past their limits.',
    },
    {
        id: 'vesper', name: 'Vesper', title: 'the Nightblade', color: '#8a5cc8',
        role: 'Melee · Blocks 1', hitsAir: false, special: 'Shadow Flurry',
        specialText: 'Vanishes into shadow and reappears at the chosen spot, slashing up to six nearby enemies, flyers included.',
        description: 'A shadow-cloaked duellist who strikes faster than the eye can follow. Fragile, but no single foe survives her twin blades for long.',
    },
    {
        id: 'briar', name: 'Briar', title: 'the Wildwarden', color: '#6aa84f',
        role: 'Ranged · Thorn', hitsAir: true, special: 'Call of the Grove',
        specialText: 'Two ancient treants burst from the road to block and batter the horde.',
        description: 'A druid of the Darkroot who speaks for the trees. His thorn darts reach flyers, and the forest itself answers his call.',
    },
]

export const towerLines = [
    {
        name: 'Ranged', img: 'tower_archer_4', color: '#7fbf5a',
        tiers: ['Archer Post', 'Ranger Lookout', 'Marksman Tower', 'Siege Ballista'],
        text: 'Fast, far-reaching volleys that pick off fliers and runners before they reach the walls.',
    },
    {
        name: 'Troops', img: 'tower_ironguard_4', color: '#d9a441',
        tiers: ['Militia Barracks', 'Skirmisher Camp', 'Ironguard Keep'],
        text: 'Barracks whose soldiers hold the road. Rally them anywhere to block, stall and surround the horde.',
    },
    {
        name: 'Mage', img: 'tower_storm_4', color: '#7c8cff',
        tiers: ['Frost Spire', 'Fire Spire', 'Storm Spire'],
        text: 'Frost to slow, fire to burn, lightning to crack armour. Three schools, each ending in a citadel of power.',
    },
    {
        name: 'Artillery', img: 'tower_thrower_3', color: '#e0703a',
        tiers: ['Stone Thrower', 'Boulder Catapult', 'Earthshaker', 'Ironstone Hurler'],
        text: 'Stone-throwing siege engines that flatten whole columns of marching foes in a single blow.',
    },
]

export const powers = [
    { name: 'Meteor Storm', img: 'icon_meteor', text: 'Call fire from the sky on the thickest part of the horde.' },
    { name: 'Call to Arms', img: 'icon_call_to_arms', text: 'Drop fresh reinforcements anywhere on the road.' },
]

export const alchemist = [
    { name: 'Cataclysm', img: 'icon_cataclysm' },
    { name: 'Deep Freeze', img: 'icon_deep_freeze' },
    { name: 'Extra Hearts', img: 'icon_extra_hearts' },
]

export const enemies = [
    { id: 'goblin', name: 'Goblin Raider' },
    { id: 'orc', name: 'Orc Grunt' },
    { id: 'bat', name: 'Cave Bat' },
    { id: 'imp', name: 'Ember Imp' },
    { id: 'troll', name: 'Stonehide Troll' },
    { id: 'wraith', name: 'Frost Wraith' },
    { id: 'ogre', name: 'Ogre Warchief' },
    { id: 'shambler', name: 'Bog Shambler' },
    { id: 'shaman', name: 'Goblin Shaman' },
    { id: 'brute', name: 'Ironhide Brute' },
    { id: 'harpy', name: 'Storm Harpy' },
    { id: 'golem', name: 'Stone Colossus' },
    { id: 'hound', name: 'Cinder Scorpion' },
    { id: 'wyvern', name: 'Ember Hornet' },
    { id: 'spellbreaker', name: 'Orc Spellbreaker' },
    { id: 'drake', name: 'Ashwing Drake' },
]

export const missions = [
    { name: 'Campaign', img: 'icon_mission_campaign', text: 'Hold the line, wave by wave, and earn up to three stars on every map.' },
    { name: 'Heroic', img: 'icon_mission_heroic', text: 'A harder horde with tower bans that force new strategies.' },
    { name: 'Onslaught', img: 'icon_mission_onslaught', text: 'A continuous assault in six stages, with no respite between waves.' },
]

/** crop: the render is letterboxed, so zoom past its black bars in thumbnails */
export type Shot = { id: string, title: string, caption: string, crop?: boolean }

export const shots: Shot[] = [
    { id: '01-defend-the-realm', title: 'Defend the Realm', caption: 'Build, upgrade and command on hand-painted battlefields.' },
    { id: '02-world-map', title: 'A Realm to Reclaim', caption: 'March from the Verdant Marches to the Ashen Spire.' },
    { id: '03-heroes', title: 'Train Your Heroes', caption: 'Level eight heroes and shape their attack, defence and specials.' },
    { id: '04-lava-lakes', title: 'Burning Wastes', caption: 'Hold the roads across forests, marshes, peaks and lava lakes.' },
    { id: '05-onslaught', title: 'Onslaught', caption: 'Survive a relentless six-stage assault.' },
    { id: '06-challenge-missions', title: 'Challenge Missions', caption: 'Heroic and Onslaught missions on every map.' },
    { id: '07-permanent-upgrades', title: 'Master Every Upgrade', caption: 'An upgrade tree that changes how every tower plays.' },
    { id: '08-the-ashen-spire', title: 'Malgrim, the Ash King', caption: 'Face the sorcerer-king in the final showdown.', crop: true },
    { id: '09-sage-scrolls', title: 'The Sage Scrolls', caption: 'A story told between battles, and a bestiary of all you face.' },
    { id: '10-title', title: 'Spell & Stone', caption: 'The adventure begins.' },
]

export const shotUrl = (id: string, small = false) => `${ASSETS}/shots/${id}${small ? '-sm' : ''}.webp`
