import type { Game, RecentlyPlayedGamesResponse, UserCard } from '../../types/steam';
import SteamCarousel from '../../components/SteamCarousel';
        
async function getRecentlyPlayedGames(): Promise<Game[]> {
    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`);
    if (!response.ok) return [];
    const data: RecentlyPlayedGamesResponse = await response.json();
    return data.response.games ?? [];
}

// async function getUserStatsForGame(appId: number) {
//     const response = await fetch(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&appid=${appId}`);
//     const data: UserStatsForGameResponse = await response.json();
//     return data;
// }

export default async function ShowSteamStats() {
    
    const stats: UserCard[] = [];
    const recentlyPlayedGames = await getRecentlyPlayedGames();

    if (!recentlyPlayedGames.length) {
        return <p className="text-sm text-gray-500">Could not load Steam data.</p>;
    }
    
    for (const game of recentlyPlayedGames) {
        // const userStats = await getUserStatsForGame(game.appid);
        stats.push({
            appid: game.appid,
            img_icon_url: game.img_icon_url,
            name: game.name,
            playtime_forever: game.playtime_forever,
        });
    }

    return <SteamCarousel stats={stats} />;
}

