import { getAccessToken } from "../../../lib/spotify";
import type { TopArtistsResponse } from "../../../types/spotify";

export async function GET() {
  const access_token = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10",
    {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("top artists error:", res.status, text);
    return new Response("Failed to fetch top artists", { status: res.status });
  }

  const data: TopArtistsResponse = await res.json();
  return Response.json(data.items);
}
