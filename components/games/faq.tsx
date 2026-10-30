import type { GameId } from "./data"

// Common questions per game, ported from servicestack-api's Views/Games/_Faq.*.cshtml

function CortexZeroFaq() {
    return (
        <>
            <details id="cortex-zero-faq-release" className="gs-qa">
                <summary>When can I play Cortex Zero?</summary>
                <div className="gs-answer">
                    <p>Right now, if you&apos;re on a computer: the full game is <a href="/cortex-zero#download">free to download</a> for
                        Windows, macOS and Linux for a limited time. It&apos;s coming to iPhone, iPad and Mac on the App Store, and to PC on
                        Steam. Every order works by mouse and keyboard or by touch, so you can play it whichever way suits you.</p>
                    <p>We&apos;d love to hear how it went. Send us a message below.</p>
                </div>
            </details>
            <details id="cortex-zero-faq-controls" className="gs-qa">
                <summary>Where can I find the controls?</summary>
                <div className="gs-answer">
                    <p>Press <strong>F1</strong>, or tap <strong>CONTROLS</strong> in the mission HUD or the pause menu, to open the full
                        in-game manual. The cursor also changes to show what a click will do: move, silent takedown, attack, hack or persuade.</p>
                    <p>Things getting hectic? Press <strong>Space</strong>, or tap the <strong>CHRONO-OVERCLOCK</strong> ring, and Lyra
                        slows the world to 15% while you plan your next move.</p>
                </div>
            </details>
            <details id="cortex-zero-faq-saves" className="gs-qa">
                <summary>Will I lose my progress?</summary>
                <div className="gs-answer">
                    <p>There are three independent campaign save slots. Each save replaces its slot in one step and keeps a backup of the
                        previous save, so an interrupted save never leaves you with a broken campaign.</p>
                    <p>Saves are stored on your device. Deleting a campaign asks you to confirm first, and only empties the slot you chose.</p>
                </div>
            </details>
            <details id="cortex-zero-faq-bug" className="gs-qa">
                <summary>How do I report a bug?</summary>
                <div className="gs-answer">
                    <p>Use the form below and tell us which mission you were on, what your squad was doing and what you expected to happen.
                        A screenshot or screen recording helps a lot. You&apos;ll find the game version in the corner of the main menu.</p>
                    <p>On Mac, Windows or Linux, please attach the log files from the <code>logs</code> folder:</p>
                    <ul>
                        <li><strong>Mac:</strong> <code>~/Library/Application Support/cortex-zero/logs</code></li>
                        <li><strong>Windows:</strong> <code>%APPDATA%\cortex-zero\logs</code></li>
                        <li><strong>Linux:</strong> <code>~/.local/share/cortex-zero/logs</code></li>
                    </ul>
                </div>
            </details>
            <details id="cortex-zero-faq-privacy" className="gs-qa">
                <summary>What data does the game collect?</summary>
                <div className="gs-answer">
                    <p>None. Cortex Zero has no accounts, ads, analytics or online features. It only writes its saves, settings and logs to
                        your own device.</p>
                    <p>If you contact us, we use your email address only to reply to you, and keep your message privately so we can follow
                        up. See our <a href="/games/privacy">Privacy Policy</a>.</p>
                </div>
            </details>
        </>
    )
}

function SpellStoneFaq() {
    return (
        <>
            <details id="spell-stone-faq-restore" className="gs-qa">
                <summary>How do I restore my Full Game unlock?</summary>
                <div className="gs-answer">
                    <p>Open <strong>Settings</strong> (the gear on the title screen or world map), open the <strong>Unlock Full Game</strong> panel
                        and tap <strong>Restore Purchases</strong>. Make sure you&apos;re signed in to the same Apple Account you bought it with.</p>
                    <p>Your unlock belongs to your Apple Account rather than a save slot, so it covers every slot and every iPhone or iPad you
                        sign in to, including a fresh install. It also keeps working offline once it has been verified.</p>
                </div>
            </details>
            <details className="gs-qa">
                <summary>What&apos;s free, and what does the unlock include?</summary>
                <div className="gs-answer">
                    <p>The first four campaign maps are free to play. A single, optional in-app purchase unlocks the full adventure:
                        <strong> 24 maps</strong> and <strong>72 missions</strong> across Campaign, Heroic and Onslaught, with
                        <strong> eight heroes</strong> to earn as you progress.</p>
                    <p>It&apos;s a one-time purchase: no subscription, no loot boxes and no paid currency. Gems are earned only by playing.</p>
                </div>
            </details>
            <details className="gs-qa">
                <summary>I was charged but the game is still locked</summary>
                <div className="gs-answer">
                    <p>Purchases sometimes wait for approval (for example <em>Ask to Buy</em>) or finish after a dropped connection. Reopen the
                        game while online: it checks for completed purchases at startup and unlocks automatically. If it&apos;s still locked,
                        try <strong>Restore Purchases</strong>, then send us a message below.</p>
                    <p>Payments and refunds are handled by Apple. To request a refund, visit <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>.</p>
                </div>
            </details>
            <details id="spell-stone-faq-saves" className="gs-qa">
                <summary>Will I lose my progress?</summary>
                <div className="gs-answer">
                    <p>The game saves after every battle and room visit, and when it&apos;s closed. There are three save slots, and each keeps a
                        backup of its previous save. If a save is ever damaged, the game restores the backup automatically and keeps the
                        damaged file aside.</p>
                    <p>Saves are stored on your device. A refund or a restore never deletes your progress.</p>
                </div>
            </details>
            <details className="gs-qa">
                <summary>The Ash King keeps freezing my towers!</summary>
                <div className="gs-answer">
                    <p>Tap a frozen tower quickly to break the ice. If rapid tapping is uncomfortable, turn on <strong>Hold to defrost</strong> in
                        Settings and simply hold the tower instead. You can also adjust music, sound, screen shake, damage numbers and tower
                        info cards there.</p>
                </div>
            </details>
            <details className="gs-qa">
                <summary>When do Heroic and Onslaught missions open?</summary>
                <div className="gs-answer">
                    <p>Challenge missions open on early maps after you complete campaign map 4, and every map has its own Heroic and Onslaught
                        missions. On iPhone and iPad, challenge missions are part of the Full Game unlock.</p>
                </div>
            </details>
            <details id="spell-stone-faq-bug" className="gs-qa">
                <summary>How do I report a bug?</summary>
                <div className="gs-answer">
                    <p>Use the form below and tell us what you were doing, which map and difficulty you were on, and what you expected to
                        happen. A screenshot or screen recording helps a lot. You&apos;ll find the game version in the bottom corner of the title screen.</p>
                    <p>On Mac, Windows or Linux, please attach the log files from the <code>logs</code> folder:</p>
                    <ul>
                        <li><strong>Mac:</strong> <code>~/Library/Application Support/spell-stone/logs</code></li>
                        <li><strong>Windows:</strong> <code>%APPDATA%\spell-stone\logs</code></li>
                        <li><strong>Linux:</strong> <code>~/.local/share/spell-stone/logs</code></li>
                    </ul>
                </div>
            </details>
            <details id="spell-stone-faq-privacy" className="gs-qa">
                <summary>What data does the game collect?</summary>
                <div className="gs-answer">
                    <p>None. Spell &amp; Stone has no accounts, ads, analytics or online features. It only writes its saves, settings and logs to
                        your own device.</p>
                    <p>If you contact us, we use your email address only to reply to you, and keep your message privately so we can follow
                        up. See our <a href="/games/privacy">Privacy Policy</a>.</p>
                </div>
            </details>
        </>
    )
}

export const faqs: Record<GameId, () => React.ReactNode> = {
    'spell-stone': SpellStoneFaq,
    'cortex-zero': CortexZeroFaq,
}
