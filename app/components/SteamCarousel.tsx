'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { UserCard } from '../types/steam';

export default function SteamCarousel({ stats }: { stats: UserCard[] }) {
    const [index, setIndex] = useState(0);
    const stat = stats[index];

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="carousel-container">
                <h1 className=" text-xl mb-3 font-bold">Recently Played Games</h1>
                <div className="mb-3 flex justify-center mt-auto">
                    <Image src={`https://cdn.akamai.steamstatic.com/steam/apps/${stat.appid}/header.jpg`} alt={stat.name} width={460} height={215} />
                </div>
                <h4 className="mt-auto">{stat.name}</h4>
                <h6 className="mt-0 flex justify-center mb-3 text-md">Playtime: {Math.round(stat.playtime_forever / 60)} hours</h6>
                <div className="flex items-center gap-4 mt-auto">
                    <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0} className="px-3 py-1 rounded disabled:opacity-30">‹</button>
                    <span className="text-sm">{index + 1} / {stats.length}</span>
                    <button onClick={() => setIndex(i => Math.min(stats.length - 1, i + 1))} disabled={index === stats.length - 1} className="px-3 py-1 rounded disabled:opacity-30">›</button>
                </div>
            </div>
        </div>
    );
} 
