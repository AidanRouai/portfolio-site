export interface SpotifyImage {
    url: string;
    height: number;
    width: number;
}

export interface TopSpotifyArtist {
    id: string;
    name: string;
    genres: string[];
    images: SpotifyImage[];
    external_urls: { spotify: string };
    type: string;
}

export interface TopArtistsResponse {
    items: TopSpotifyArtist[];
}

export interface SpotifyArtist {
    external_urls: { spotify: string };
    followers: { total: number };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface SpotifyArtistGenresResponse {
    artists: SpotifyArtist[];
}
