'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { SpotifyArtist } from '../types/spotify';


async function fetchArtists(): Promise<SpotifyArtist[]> {
    const res = await fetch('/api/spotify/top-artists');
    if (!res.ok) throw new Error('Failed to fetch top artists: ' + res.status);
    const artists: SpotifyArtist[] = await res.json();
    console.log('Fetched artists:', artists);
    return artists;
}

function getArtistLineItem(artist: SpotifyArtist) {
    return (
        <li key={artist.id} className="flex items-center gap-3">
            <Image src={artist.images[0].url} alt={artist.name} width={40} height={40} className="rounded-full" /> {artist.name}
        </li>
    );
}

export default function TopArtistsList() {
    const [error, setError] = useState(false);
    const [artists, setArtists] = useState<SpotifyArtist[] | null>(null);
    useEffect(() => {
        fetchArtists() 
        .then((data) => setArtists(data))
        .catch((err) => { console.error(err); setError(true); });
    }, []);

    if (error) return <p className="text-sm text-gray-500">Could not load Spotify data.</p>;
    if (!artists) return <p className="text-sm ">Loading...</p>;
    
    return (
        <div className="carousel-container">
            <h1 className=' text-xl mb-3 font-bold'> Favorite Artists Recently</h1>
            <ul className="w-64">
                {artists?.map(getArtistLineItem)}
            </ul>
        </div>
    );
}