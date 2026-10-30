export type SupportReceipt = { id: string }

/**
 * Sends a support request to servicestack-api's game support endpoint as multipart form data
 * (Game, Topic, Device, DisplayName, Email, Subject, AppVersion, Details, Attachments, Website).
 *
 * Not connected yet: the endpoint first needs CORS enabled for this site. Until then it rejects,
 * and the form offers a pre-filled email instead.
 */
export async function submitSupportRequest(_form: FormData): Promise<SupportReceipt> {
    throw new Error('Online support messages are not connected yet')
}
