"use client";

import { usePlayerContext } from "@/context/PlayerContext";
import { Player } from "@/interfaces/player";
import { fetchPlayer } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Detalle = () => {
  const {handleSelectPlayer} = usePlayerContext()
  const params = useParams();
  const [player, setPlayer] = useState<Player>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
 
  useEffect(() => {
    const loadPlayer = async () => {
      try {
        if (!params?.id) return console.error("error al buscar el jugador");
        const {id} = params
        const playerDate = await fetchPlayer(id.toString());
        setPlayer(playerDate[0]);
      } catch (error) {
        console.error("error al buscar el jugador", error);
      } finally {
        setLoading(false);
      }
    };
    loadPlayer();
  }, []);

  const agregarJugador =()=>{
    if(player){
      handleSelectPlayer(player)
      router.push('/crearcancha')
    }
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="p-5 flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to-gray-800 h-full min-h-screen">
      {
      
      player && (
        <div className="w-72 py-10 mt-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2">
          <Image
            src={player.player_image}
            width={200}
            height={200}
            alt={player.player_name}
            className="rounded-full border-2 border-gray-200"
          />
          <div>
            <p className="text-3xl font-semibold underline my-5">{player.player_name}</p>
            <p className="text-xl">Minutos jugados <span className="font-bold">{player.player_minutes}</span></p>
            <p className="text-xl">Camiseta numero: <span className="font-bold">{player.player_number}</span></p>
          </div>
          <div className="flex gap-2">
            <Link href='/crearcancha' className="py-2 px-3 text-xl bg-gray-700 color rounded-md text-white">Volver</Link>
            <button onClick={agregarJugador} className="py-2 px-3 text-xl bg-lime-700 color rounded-md text-white">Agregar</button>
          </div>
        </div>
      )
      
      }
    </div>
  );
};

export default Detalle;
