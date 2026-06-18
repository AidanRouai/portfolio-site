export interface Game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
}

export interface RecentlyPlayedGamesResponse {
  response: {
    total_count: number;
    games: Game[];
  };
}

export interface UserStatsForGameResponse {
  playerstats: {
    steamID: string;
    gameName: string;
  };
}

export interface UserCard {
  appid: number;
  img_icon_url: string;
  name: string;
  playtime_forever: number;
}
