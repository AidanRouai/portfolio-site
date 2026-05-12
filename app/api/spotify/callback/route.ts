export async function GET(req: Request) {
    const code = new URL(req.url).searchParams.get('code');
    if (!code) return new Response('Missing code', { status: 400 });

    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64')}`,
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code!,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
            }),
        });

    const data = await res.json();
    return Response.json(data);
}