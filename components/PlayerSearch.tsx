"use client";
import { Player } from "@/interfaces/player";
import { fetchPlayers } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function PlayerSearch() {

  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const playersData = await fetchPlayers(playerName);
    if(playersData.error) return alert('No se encontro el jugador')
    setPlayers(playersData.sort((a: Player, b: Player)=> parseInt(b.player_minutes) - parseInt(a.player_minutes)));
  };

  return (
    <div className="md:w-3/5 flex flex-col items-center gap-y-3 bg-white p-5 top-10 rounded-md shadow-xl min-h-96 absolute">
      <h1>Buscar Jugador</h1>
      <form className="flex flex-row gap-x-2" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Nombre del jugador"
          className="border-2 border-zinc-400 rounded-lg px-2 py-1 text-lg"
        />
        <input
          type="submit"
          value="Buscar"
          className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all"
        />
      </form>
      <div className="w-full flex flex-row flex-wrap gap-2 justify-center items-stretch max-h-80 overflow-y-auto">
        {
        players?.map((player, index) => (
          <Link key={index} href={`/detalle/${player.player_id}`} className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2  min-w-36 cursor-pointer"> 
              <p>{player.player_name}</p>
              {player.player_image && (
                <Image
                  src={player.player_image}
                  width={150}
                  height={150}
                  alt={player.player_name}
                  className="rounded-full border-2 border-gray-200"
                />
              )}
          </Link>
        ))
        }
      </div>
    </div>
  );
  }

export default PlayerSearch
