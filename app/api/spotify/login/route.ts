export function GET() {
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    scope: "user-top-read",
  });
  return Response.redirect(`https://accounts.spotify.com/authorize?${params}`);
}
