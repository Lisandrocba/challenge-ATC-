"use client";
import { usePlayerContext } from "@/context/PlayerContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { equipos, removeTeam, editTeam } = usePlayerContext();
  const router = useRouter();
  const [user, setUser] = useState<string | null>('')

  useEffect(() => {
    const value = sessionStorage.getItem('user');
    setUser(value)
  }, []);
  
  const actionEditTeam =(index: number)=>{
    editTeam(index)
    router.push('/crearcancha')
  }

  return (
    <div className="p-5 flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-800 h-full min-h-screen">
      <div className="w-full flex flex-row justify-between items-center flex-nowrap">
        <div >
          {
            user && <p className="text-2xl text-white">Bienvenido <span className="font-semibold text-slate-400 underline">{user}</span></p>
          }
        </div>
        <div>
          {
            equipos.length < 2 ?
            <Link
            href="/crearcancha"
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all"
          >
            Agregar equipo
          </Link> :
          <p className="text-white">No se pueden agregar mas de dos equipos</p>
          }
        </div>
       
      </div>
      <div className="flex flex-row gap-5">
        {equipos.length > 0 ? (
          equipos.map((equipo, index) => (
            <div key={index}>
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-2xl text-white mt-10">{equipo.name}</p>
                <div className="flex flex-row gap-2 items-center">
                        <button onClick={()=> actionEditTeam(index)} className="px-4 py-2 bg-green-500 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all">Editar</button>
                        <button onClick={()=> removeTeam(index)} className="px-4 py-2 bg-red-500 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all">Eliminar</button>
                </div>
              </div>
              <div className="bg-lime-500 mt-10 min-h-96 rounded-sm p-10 flex flex-row flex-wrap justify-center gap-5">
                <div className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                    <p>{equipo.players[0].player_name}</p>
                   
                  <Image
                    src={equipo.players[0].player_image}
                    width={100}
                    height={100}
                    alt={equipo.players[0].player_name}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                  <p>{equipo.players[1].player_name}</p>
                  <Image
                    src={equipo.players[1].player_image}
                    width={100}
                    height={100}
                    alt={equipo.players[1].player_name}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                  <p>{equipo.players[2].player_name}</p>
                  <Image
                    src={equipo.players[2].player_image}
                    width={100}
                    height={100}
                    alt={equipo.players[2].player_name}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                  <p>{equipo.players[3].player_name}</p>
                  <Image
                    src={equipo.players[3].player_image}
                    width={100}
                    height={100}
                    alt={equipo.players[3].player_name}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                  <p>{equipo.players[4].player_name}</p>
                  <Image
                    src={equipo.players[4].player_image}
                    width={100}
                    height={100}
                    alt={equipo.players[4].player_name}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl text-white mt-10">Estas listo para crear tu mejor equipo?</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
