"use client";
import { Equipo, Player } from "@/interfaces/player";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type playerContextType = {
  equipo: Equipo;
  setEquipo: Dispatch<SetStateAction<Equipo>>;
  equipos: [];
  setEquipos: Dispatch<SetStateAction<[]>>;
  handleSelectPlayer: (player: Player) => void;
  deletePlayer: (id: number) => void;
  addNameEquipo: (name: string) => void;
};

type Props = {
  children: ReactNode;
};

const playerContextTypeDefault: playerContextType = {
  equipo: {
    name: '',
    players: []
  },
  setEquipo: () => {},
  equipos: [],
  setEquipos: () => {},
  handleSelectPlayer: () => {},
  deletePlayer: () => {},
  addNameEquipo: ()=> {},
};

const PlayerContext = createContext<playerContextType>(
  playerContextTypeDefault
);

export function usePlayerContext() {
  return useContext(PlayerContext);
}

export function PlayerProvider({ children }: Props) {
  const [equipo, setEquipo] = useState<Equipo>({
    name: '',
    players: []
  });
  const [equipos, setEquipos] = useState<[]>([]);

  const handleSelectPlayer = (player: Player) => {
    if (equipo?.players.find((p) => p.player_id === player.player_id)) {
      alert("Este jugador ya está en una de las canchas.");
      return;
    }
    if (equipo.players.length < 5) {
      setEquipo({...equipo, players: [...equipo.players, player]});
    } else {
      alert("No se pueden agregar mas de 5 jugadores");
      return;
    }
  };

  const addNameEquipo =(name: string)=>{
    setEquipo({...equipo, name: name})
  }

  const deletePlayer = (id: number) => {
    setEquipo({...equipo, players: equipo?.players.filter((player) => player.player_id !== id)});
  };

  const value: playerContextType = {
    equipo,
    setEquipo,
    equipos,
    setEquipos,
    handleSelectPlayer,
    deletePlayer,
    addNameEquipo
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
