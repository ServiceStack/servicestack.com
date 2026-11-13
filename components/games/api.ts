import { games } from "./data"

export type SupportReceipt = { id: string }

/** servicestack-api, which saves each request privately and emails it to the team */
export const API_URL = process.env.NEXT_PUBLIC_GAMES_API_URL ?? 'https://account.servicestack.net'

/** Thrown when a request couldn't be sent. `invalid` means the player can fix it and try again. */
export class SupportError extends Error {
    constructor(message: string, public invalid: boolean) {
        super(message)
    }
}

/**
 * Sends a support request to servicestack-api's game support endpoint as multipart form data
 * (Game, GameName, Topic, Device, DisplayName, Email, Subject, AppVersion, Details, Attachments, Website).
 * GameName lets the API accept games added here before they're listed in GameSupportRequest.
 */
export async function submitSupportRequest(form: FormData): Promise<SupportReceipt> {
    const game = games.find(x => x.id === form.get('Game'))
    if (game) form.set('GameName', game.name)
    let res: Response
    try {
        res = await fetch(`${API_URL}/games/api/support`, { method: 'POST', body: form })
    } catch {
        throw new SupportError("We couldn't reach our servers.", false)
    }
    const body = await res.json().catch(() => null)
    if (res.ok && body?.id) return { id: body.id }
    throw new SupportError(body?.message ?? "We couldn't send your message.", res.status === 400 && !!body?.message)
}
