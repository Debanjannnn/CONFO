"use server"
import { StreamClient } from '@stream-io/node-sdk';
import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;
const apiSecret = process.env.STEAM_SECRET_KEY;

export const tokenProvider = async (): Promise<string> => {
    const user = await currentUser();
    if (!user) throw new Error('User is not logged in');
    if (!apiKey) throw new Error('NO API KEY');
    if (!apiSecret) throw new Error('NO API SECRET');

    const client = new StreamClient(apiKey, apiSecret, { timeout: 3000 });

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(user.id, exp);

    return token;
}
