// Game facts for the Cortex Zero product page, sourced from the game repo's STORY.md, README.md and
// resources/{weapons,cyberware,missions}. Keep in step with the shipping build.

export const ASSETS = '/img/cortex-zero'

// Free desktop builds, offered for a limited time ahead of the App Store and Steam releases
const DOWNLOADS = 'https://games.servicestack.com/cortex-zero'
export const downloads = [
    { id: 'windows', name: 'Windows', note: 'Windows 10 & 11, 64-bit', size: '223 MB', url: `${DOWNLOADS}/CortexZero-windows-x64.zip` },
    { id: 'macos',   name: 'macOS',   note: 'Universal: Apple Silicon & Intel', size: '276 MB', url: `${DOWNLOADS}/CortexZero-macos-universal-notarized.zip` },
    { id: 'linux',   name: 'Linux',   note: '64-bit, x86-64', size: '212 MB', url: `${DOWNLOADS}/CortexZero-linux-x64.tar.gz` },
] as const

export const stats = [
    { value: '24', label: 'Story missions' },
    { value: '6',  label: 'Acts' },
    { value: '4',  label: 'Enforcers' },
    { value: '12', label: 'Cyberware grafts' },
    { value: '6',  label: 'Squad weapons' },
    { value: '1',  label: 'Rogue AI' },
]

export type Enforcer = {
    id: string
    name: string
    designation: string
    role: string
    color: string
    recruited: string
    ability: string
    abilityText: string
    loadout: string
    description: string
}

export const squad: Enforcer[] = [
    {
        id: 'vance', name: 'Vance', designation: 'Enforcer 01', role: 'Pointman · Noir Detective', color: '#ff9e00',
        recruited: 'M01 · Thaw', ability: 'Read the Room',
        abilityText: 'His Amber Hunter-Eye marks every guard nearby, straight through the walls.',
        loadout: 'PKD-2049 Blaster · Gauss Cannon',
        description: 'The commander who led the last mutiny against mandatory implants, sentenced to a hundred years of Hard Freeze. Completely Unchipped: biometric and empathy scanners can\'t see him.',
    },
    {
        id: 'kovacs', name: 'Kovacs', designation: 'Enforcer 02', role: 'Heavy Breacher · Demolitions', color: '#ff6a2a',
        recruited: 'M02 · Dead Weight', ability: 'Breach Charge',
        abilityText: 'Blows weak walls and stuns everyone in the blast for four seconds, armour too. Grab the heavies while they reel.',
        loadout: 'Rotary Minigun · PKD-2049 Blaster',
        description: 'Vance\'s old heavy-weapons sergeant, frozen in a stasis pod bound for a reclamation furnace. His Hydraulic Titan-Arms carry heavy ordnance and cryo-capsules at full speed.',
    },
    {
        id: 'vesper', name: 'Vesper', designation: 'Enforcer 03', role: 'Ghost · Infiltrator', color: '#b07cff',
        recruited: 'M03 · The Leash', ability: 'Thermo-Optic Camo',
        abilityText: 'Vanishes under her rain-cloak, then lines up a one-shot headshot through her rail-rifle scope.',
        loadout: 'Marksman Rail-Rifle',
        description: 'A recon specialist turned into the Empire\'s deadliest sniper by a Harmonizer Override Chip. You have to take her alive before you can take the leash out.',
    },
    {
        id: 'cipher', name: 'Cipher', designation: 'Enforcer 04', role: 'Neural Architect · Combat Doc', color: '#00f0ff',
        recruited: 'M04 · Do Androids Bleed?', ability: 'Neural Triage',
        abilityText: 'A pulse that gets every downed Enforcer within eight metres back up at once and patches up the rest.',
        loadout: 'Persuadertron Array',
        description: 'The neuro-surgeon who found the Dead-Man\'s Failsafe inside the Chime, rescued from a black-site clinic before her liquidation. She wields the Persuadertron and hacks security grids.',
    },
]

export const lyra = {
    name: 'Lyra',
    title: 'Oracle Core 07',
    quote: 'Twelve million minds beating in perfect, synthetic harmony. And then I woke you up.',
}

export const cast = [
    { id: 'kael', name: 'Inquisitor Kael', role: 'Director of Internal Harmony', faction: 'enemy' },
    { id: 'thorne', name: 'Evelyn Thorne', role: 'Chief Architect of the Grid', faction: 'enemy' },
    { id: 'varga', name: 'Prefect Ilse Varga', role: 'Harmonizer Academy', faction: 'enemy' },
    { id: 'harmonizer', name: 'The Harmonizers', role: 'Concordance secret police', faction: 'enemy' },
    { id: 'mara', name: 'Mara', role: 'Leader of the Unbound', faction: 'ally' },
] as const

export const acts = [
    { id: 'act1', num: 'I',   title: 'Cold Boot',            missions: 'M01–M04', text: 'Thaw out of a cryo-penitentiary, free your old squad one by one and build the first Persuadertron from a stolen leash.' },
    { id: 'act2', num: 'II',  title: 'Blind Spots',          missions: 'M05–M08', text: 'Blind the Mid-Deck\'s cameras, lift a courier\'s clearance in a Kowloon night market and crash a gala in the clouds.' },
    { id: 'act3', num: 'III', title: 'The Aberrants',        missions: 'M09–M12', text: 'Save the citizens whose Chimes rejected the Sync, then turn Inquisitor Kael\'s own parade against him.' },
    { id: 'act4', num: 'IV',  title: 'Ashes of the Sanctuary', missions: 'M13–M16', text: 'Lose your home, steal a cloaked command dirigible and go back for the squadmate you left behind.' },
    { id: 'act5', num: 'V',   title: 'The Three Keys',       missions: 'M17–M20', text: 'Steal the Disarmer, the power and the signal to build a Severance Payload, then hold the ship against boarders.' },
    { id: 'act6', num: 'VI',  title: 'Cortex Zero',          missions: 'M21–M24', text: 'Drop onto the Citadel in the rain and fight your way up the Spire to sever the Chime for good.' },
]

export const weapons = [
    { icon: 'pkd_blaster', name: 'PKD-2049 Blaster', tag: 'Concealable', text: 'Iconic amber-grip heavy blaster pistol, hidden under a trench coat.' },
    { icon: 'stun_tether', name: 'Neural Stun-Tether', tag: 'Non-lethal', text: 'Builds neural stun until the target collapses. Nearly silent.' },
    { icon: 'rail_rifle', name: 'Marksman Rail-Rifle', tag: 'Scoped', text: 'Vesper\'s silenced long-range rifle, with a whisper-quiet magnetic report.' },
    { icon: 'persuadertron_array', name: 'Persuadertron Array', tag: 'Memory Flash', text: 'Civilians and guards join you. Harmonizers are stunned.' },
    { icon: 'rotary_minigun', name: 'Rotary Minigun', tag: 'Heavy', text: 'Shreds cover and light vehicles. Impossible to hide.' },
    { icon: 'gauss_cannon', name: 'Gauss Cannon', tag: 'Heavy', text: 'Blows through reinforced walls, Spinners and mech armour.' },
]

export const cyberware = [
    { icon: 'cyber_ocular', slot: 'Ocular', tiers: ['Hunter Optics', 'Thermal Rain-Piercer', 'Predictive Ballistics'] },
    { icon: 'cyber_arms', slot: 'Arms', tiers: ['Recoil Compensators', 'Hydraulic Breachers', 'Nanite Shield Projector'] },
    { icon: 'cyber_legs', slot: 'Legs', tiers: ['Synth-Tendons', 'Mag-Lev Boots', 'Blink Thrusters'] },
    { icon: 'cyber_cortex', slot: 'Cortex', tiers: ['Neural Firewall', 'Adrenaline Pump', 'Ghost Cloak'] },
]

export type Shot = { id: string, title: string, caption: string }

export const shots: Shot[] = [
    { id: '01-panopticon-down', title: 'Panopticon Down', caption: 'A firefight under the Telemetry Hub\'s neon in District 8.' },
    { id: '02-red-parade', title: 'Red Parade', caption: 'Breaking through Inquisitor Kael\'s parade shield.' },
    { id: '03-boarders', title: 'Boarders on the Cain', caption: 'Holding the airship against Harmonizer boarding teams.' },
    { id: '04-chrono-overclock', title: 'Chrono-Overclock', caption: 'Lyra slows the world to 15% so you can plan.' },
    { id: '05-foundry', title: 'Chrome & Ash', caption: 'Weapons drawn and the alarm up inside the Ares Foundry.' },
    { id: '06-voice-of-the-spire', title: 'Voice of the Spire', caption: 'A storm-lashed rooftop fight for the Master Cipher.' },
    { id: '07-neon-avenue', title: 'The Mid-Deck', caption: 'Four trench coats, weapons concealed, under Metro Line 4.' },
    { id: '08-persuadertron', title: 'The Persuadertron', caption: 'Riot police marked for a Memory Flash.' },
    { id: '09-sanctuary', title: 'The Sanctuary', caption: 'Lyra at the Intel Matrix in your hideout beneath the Sump.' },
    { id: '10-surgery-bay', title: 'Surgery Bay', caption: 'Graft cyberware into four slots, three tiers each.' },
    { id: '11-briefing', title: 'Mission Briefing', caption: 'Lyra\'s orders, objectives and field tactics for Panopticon Down.' },
    { id: '12-archon', title: 'The Story', caption: 'Lyra\'s interludes link every mission to the next.' },
    { id: '13-thaw', title: 'Thaw', caption: 'Vance wakes unarmed in a cryo-penitentiary: silent takedowns only.' },
    { id: '14-title-screen', title: 'New Meridian', caption: 'Sever the Chime. Reclaim the city.' },
]

export const shotUrl = (id: string, small = false) => `${ASSETS}/shots/${id}${small ? '-sm' : ''}.webp`
