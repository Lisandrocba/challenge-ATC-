export interface Player {
    player_id: number;
    player_name: string;
    nationality: String;
    age: number;
    team_name: String;
    player_image: string;
    player_minutes: string;
    player_number: string;
  }

export interface PropLeage {
    league: String
}

export interface PlayerOption {
  value: number;
  label: String;
  player_image?: String;
}

export interface Equipo {
  name: string;
  players: Player[];
}