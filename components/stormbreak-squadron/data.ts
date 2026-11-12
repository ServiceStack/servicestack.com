// Game facts for the Stormbreak Squadron product page, sourced from the game repo's README.md,
// docs/app-store/listing.md, src/Stormbreak.Core/Content/{Campaign,ContentDb}.cs and Sim/Results.cs.
// Keep in step with the shipping build.

export const ASSETS = '/img/stormbreak-squadron'

// Free desktop builds, offered for a limited time ahead of the App Store and Steam releases
// (built with the game repo's tools/build-desktop.sh, the Mac app notarized with tools/notarize-macos.sh)
const DOWNLOADS = 'https://games.servicestack.com/stormbreak-squadron'
export const downloads = [
    { id: 'windows', name: 'Windows', note: 'Windows 10 & 11, 64-bit', size: '167 MB', url: `${DOWNLOADS}/StormbreakSquadron-windows-x64.zip` },
    { id: 'macos',   name: 'macOS',   note: 'Universal: Apple Silicon & Intel', size: '224 MB', url: `${DOWNLOADS}/StormbreakSquadron-macos-universal-notarized.zip` },
    { id: 'linux',   name: 'Linux',   note: '64-bit, x86-64', size: '157 MB', url: `${DOWNLOADS}/StormbreakSquadron-linux-x64.tar.gz` },
] as const

export const stats = [
    { value: '24', label: 'Stages' },
    { value: '6',  label: 'Theatres of war' },
    { value: '6',  label: 'Fortress bosses' },
    { value: '8',  label: 'Power levels' },
    { value: '6',  label: 'Medals per stage' },
    { value: '0',  label: 'Ads or IAPs' },
]

export const prologue = 'The Ashen Dominion\'s flying fortresses are taking the free islands. Stormbreak Squadron is all that\'s left.'

export type Stage = { id: string, name: string, time: string, briefing: string, target: string }

export type Theatre = {
    id: string
    num: string
    chapter: string
    name: string
    setting: string
    color: string
    stages: Stage[]
    fortress: { name: string, boss: string, briefing: string, intel: string, debrief: string }
}

// The six chapters of Operation Stormbreak. Ids match the game's mission ids and briefing art.
export const theatres: Theatre[] = [
    {
        id: 'reefbreak', num: 'I', chapter: 'Chapter I', name: 'Coral Archipelago', setting: 'Tropical reef', color: '#3fe0d0',
        stages: [
            { id: 'reefbreak_1', name: 'Coral Dawn', time: 'Dawn', briefing: 'First patrol of the war: clear the skies over the reef.', target: 'Bomber leader' },
            { id: 'reefbreak_2', name: 'Lagoon Run', time: 'Midday', briefing: 'Sink the boats mining the lagoon channels.', target: 'Patrol flagship' },
            { id: 'reefbreak_3', name: 'Atoll Gate', time: 'Dusk', briefing: 'Hold the atoll gate at sundown.', target: 'Red Talon flight' },
        ],
        fortress: {
            name: 'Reefbreak', boss: 'Tempest',
            briefing: 'Defend the carrier Resolute from the first fortress strike.',
            intel: 'Turrets, then engines, then hit the core when it opens.',
            debrief: 'The Tempest is down. Its flight log points north, to the ice fjords.',
        },
    },
    {
        id: 'frostline', num: 'II', chapter: 'Chapter II', name: 'Northern Fjords', setting: 'Arctic fjords', color: '#bfe3ff',
        stages: [
            { id: 'frostline_1', name: 'Icebreaker', time: 'Midday', briefing: 'Escort the icebreakers north through the pack ice.', target: 'Bomber leader' },
            { id: 'frostline_2', name: 'Floe Hunt', time: 'Overcast', briefing: 'Hunt the gunboats hiding among the floes.', target: 'Floe flotilla' },
            { id: 'frostline_3', name: 'Fjord Gate', time: 'Dawn', briefing: 'Force the fjord before the snow closes it.', target: 'White Fang aces' },
        ],
        fortress: {
            name: 'Frostline', boss: 'Glacier',
            briefing: 'Strike the fortress shipyards hidden in the ice.',
            intel: 'Heavier plating and wider sway: keep moving in the whiteout.',
            debrief: 'The shipyard is gone. The Dominion\'s fuel runs along the desert coast.',
        },
    },
    {
        id: 'dunewake', num: 'III', chapter: 'Chapter III', name: 'Sirocco Coast', setting: 'Desert coast', color: '#f2b45a',
        stages: [
            { id: 'dunewake_1', name: 'Sandstrike', time: 'Dawn', briefing: 'Raid the coastal airstrips at first light.', target: 'Desert Hawk flight' },
            { id: 'dunewake_2', name: 'Mirage Coast', time: 'Midday', briefing: 'Sink the fuel barges along the coast.', target: 'Convoy flagship' },
            { id: 'dunewake_3', name: 'Sirocco Pass', time: 'Dusk', briefing: 'Cross the pass ahead of the sandstorm.', target: 'Heavy bomber wing' },
        ],
        fortress: {
            name: 'Dunewake', boss: 'Sirocco',
            briefing: 'Cut the Dominion\'s fuel convoys along the desert coast.',
            intel: 'Fast and swaying wide: lead your shots.',
            debrief: 'The convoys are burning. The fortresses are forged inside a volcano.',
        },
    },
    {
        id: 'cinderfall', num: 'IV', chapter: 'Chapter IV', name: 'Cinder Isles', setting: 'Volcanic islands', color: '#ff7a3d',
        stages: [
            { id: 'cinderfall_1', name: 'Ember Isles', time: 'Midday', briefing: 'Cross the ember isles under the ash cloud.', target: 'Gunboat nest' },
            { id: 'cinderfall_2', name: 'Ashfall', time: 'Overcast', briefing: 'Stop the bombers rising from the ash.', target: 'Ash bomber wing' },
            { id: 'cinderfall_3', name: 'Caldera', time: 'Dusk', briefing: 'Break into the caldera at dusk.', target: 'Cinder aces' },
        ],
        fortress: {
            name: 'Cinderfall', boss: 'Inferno',
            briefing: 'Destroy the volcano foundry before it erupts.',
            intel: 'Heavily armoured: be ready the moment the core opens.',
            debrief: 'The foundry is buried. Their leaders are fleeing to a night launch site.',
        },
    },
    {
        id: 'blackwater', num: 'V', chapter: 'Chapter V', name: 'Blackwater Atolls', setting: 'Night atolls', color: '#7fb2ff',
        stages: [
            { id: 'blackwater_1', name: 'Twilight Patrol', time: 'Dusk', briefing: 'Patrol the atolls as night falls.', target: 'Night Owl flight' },
            { id: 'blackwater_2', name: 'Lantern Bay', time: 'Night', briefing: 'Sink the picket boats lighting the bay.', target: 'Picket flagship' },
            { id: 'blackwater_3', name: 'Dark Tide', time: 'Storm', briefing: 'Push through the storm toward the launch site.', target: 'Night bomber wing' },
        ],
        fortress: {
            name: 'Blackwater', boss: 'Nightshade',
            briefing: 'Stop the night launch of the Dominion command ship.',
            intel: 'Stealth paint: watch the turret glows and part labels.',
            debrief: 'Too late: the Dreadskull reached orbit. Project Starfall is ready.',
        },
    },
    {
        id: 'starfall', num: 'VI', chapter: 'Chapter VI', name: 'Low Orbit', setting: 'The edge of space', color: '#c49bff',
        stages: [
            { id: 'starfall_1', name: 'Ascent', time: 'Sunrise', briefing: 'Climb through the raider screen into orbit.', target: 'Raider ace wing' },
            { id: 'starfall_2', name: 'Debris Field', time: 'Orbital yards', briefing: 'Fight through the wreckage of the orbital yards.', target: 'Corsair gunship' },
            { id: 'starfall_3', name: 'High Orbit', time: 'High orbit', briefing: 'Break the last screen before the Dreadskull.', target: 'Dreadskull guard' },
        ],
        fortress: {
            name: 'Starfall', boss: 'Dreadskull',
            briefing: 'Follow the Dreadskull into orbit and end the war.',
            intel: 'The heaviest armour in the war. Same pattern: turrets, engines, core.',
            debrief: 'The Dreadskull is destroyed. The free islands are free.',
        },
    },
]

export const enemies = [
    { name: 'Interceptor', kind: 'Fighter', text: 'The Dominion\'s line fighter. Comes in waves and stays on screen, repositioning until it\'s shot down.' },
    { name: 'Dart', kind: 'Diver', text: 'Hovers, locks on, fires a three-round fan and dives straight through the spot it marked.' },
    { name: 'Strafer', kind: 'Twin-boom', text: 'Sweeps side to side across the screen, changing lane each pass and dropping flak fans.' },
    { name: 'Veteran', kind: 'Ace', text: 'Flies with the patrols from the fjords on. Takes more hits and fires long four-round bursts.' },
    { name: 'Bomber', kind: 'Bomber', text: 'Slow and heavily loaded. Shoot one down and it drops supplies for you.' },
    { name: 'Flak bomber', kind: 'Bomber', text: 'Throws rotating spiral rings of flak across the sky.' },
    { name: 'Heavy bomber', kind: 'Bomber', text: 'Fires wide nine-round fans. Stay close underneath it.' },
    { name: 'Gunboat', kind: 'Naval', text: 'Lurks in the channels and floes firing three-round bursts. Boats can\'t dodge a bomb.' },
]

export const miniBosses = [
    { name: 'Gunship', text: 'A four-engine flying boat that cycles aimed fans, spirals and flak walls, and launches darts.' },
    { name: 'Destroyer', text: 'Leads the flotilla stages, firing its fore and aft turrets together.' },
]

export const pickups = [
    { key: 'P', name: 'Power', color: '#5fe36a', text: '+1 cannon power, up to 8' },
    { key: 'S', name: 'Shield', color: '#4aa8ff', text: 'Refills your shield cells' },
    { key: 'B', name: 'Bomb', color: '#ff5a4a', text: 'One more screen-clearing bomb' },
]

export const medals = [
    { name: 'Bronze Wings', text: 'Reach the stage\'s bronze score' },
    { name: 'Silver Wings', text: 'Reach the silver score' },
    { name: 'Gold Wings', text: 'Reach the gold score' },
    { name: 'Unbroken', text: 'Finish without losing a life' },
    { name: 'Stormbreaker', text: 'Down the fortress against the clock, or clear a stage on guns alone' },
    { name: 'Marksman', text: 'Destroy 85% of the enemies' },
]

export type Shot = { id: string, title: string, caption: string }

// Portrait 3:4 captures from the iPad build
export const shots: Shot[] = [
    { id: '02-reef', title: 'Coral Dawn', caption: 'First patrol of the war, low over the Coral Archipelago.' },
    { id: '03-boss', title: 'The Tempest', caption: 'Taking out the first fortress\'s turrets in a storm.' },
    { id: '08-glacier', title: 'The Glacier', caption: 'The second fortress, sweeping wide through the fjords.' },
    { id: '04-arctic', title: 'Floe Hunt', caption: 'Hunting gunboats among the pack ice in a snowstorm.' },
    { id: '05-desert', title: 'Sandstrike', caption: 'Raiding the Sirocco Coast\'s airstrips at first light.' },
    { id: '09-sirocco', title: 'The Sirocco', caption: 'A sand-painted fortress guarding the last fuel depot.' },
    { id: '10-volcanic', title: 'Ember Isles', caption: 'Crossing the Cinder Isles under the ash cloud.' },
    { id: '11-inferno', title: 'The Inferno', caption: 'The volcano foundry\'s fortress, armoured to the core.' },
    { id: '12-night', title: 'Lantern Bay', caption: 'Sinking the picket boats that light the bay at night.' },
    { id: '06-space', title: 'Ascent', caption: 'Power 7 of 8, climbing through the raider screen into orbit.' },
    { id: '13-dreadskull', title: 'The Dreadskull', caption: 'The Dominion\'s command ship, and the end of the war.' },
    { id: '07-briefing', title: 'Briefing', caption: 'Every stage opens with a briefing and closes with a debrief.' },
]

export const shotUrl = (id: string, small = false) => `${ASSETS}/shots/${id}${small ? '-sm' : ''}.webp`
