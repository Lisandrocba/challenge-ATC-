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
  equipos: Equipo[];
  setEquipos: Dispatch<SetStateAction<Equipo[]>>;
  handleSelectPlayer: (player: Player) => void;
  deletePlayer: (id: number) => void;
  addNameTeam: (name: string) => void;
  createTeam: () => void;
  removeTeam: (index: number) => void;
  editTeam: (index: number) => void
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
  addNameTeam: ()=> {},
  createTeam: ()=> {},
  removeTeam: ()=> {},
  editTeam: ()=> {},
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
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [edit, setEdit] = useState(
    {
      flat: false,
      ide: -1
    }
  )

  const handleSelectPlayer = (player: Player) => {
    let flatPayer = false
    equipos?.map(equipo=>{
      if (equipo?.players.find((p) => p.player_id === player.player_id)) {
        alert("Este jugador ya está en una de las canchas.");
        flatPayer= true
        return;
      }
    })
    if(flatPayer) return
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

  const addNameTeam =(name: string)=>{
    setEquipo({...equipo, name: name})
  }

  const deletePlayer = (id: number) => {
    setEquipo({...equipo, players: equipo?.players.filter((player) => player.player_id !== id)});
  };

  const createTeam =()=> {
    if(edit.flat){
      setEquipos([equipos[edit.ide] = equipo])
      setEquipo({
        name: '',
        players: []
      })
      setEdit({
        flat: false,
        ide: -1
      })
    }else{
      if(equipos.length < 2){
          setEquipos([...equipos, equipo])
          setEquipo({
            name: '',
            players: []
          })
        } else{
          alert("No se pueden crear mas de dos equipos")
        }
    }
  }

  const removeTeam =(index: number) =>{
    if(equipos){
      setEquipos(equipos.filter((_, i)=> i !== index))
    }
  }

  const editTeam =(index: number)=> {
    setEquipo({
      name: '',
      players: []
    })
    if(equipos){
      setEquipo(equipos[index])
    }
    setEdit({flat: true, ide: index})
  }

  const value: playerContextType = {
    equipo,
    setEquipo,
    equipos,
    setEquipos,
    handleSelectPlayer,
    deletePlayer,
    addNameTeam,
    createTeam,
    removeTeam,
    editTeam
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
