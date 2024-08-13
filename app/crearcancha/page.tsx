"use client"
import PlayerSearch from "@/components/PlayerSearch"
import { usePlayerContext } from "@/context/PlayerContext"
import { Player } from "@/interfaces/player"
import Image from "next/image"
import { useState } from "react"
import { Equipo } from '../../interfaces/player';

const CrearCancha = () => {
    const {equipo, deletePlayer, addNameEquipo} = usePlayerContext()
    const [flatSearch, setFlatSearch] = useState(false)
    const [name, setName] = useState('')

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

  return (
    <div className="p-5 flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-800 h-full min-h-screen">
        <div className="w-full flex flex-row justify-around">
            {
                !equipo?.name ?
                <div className="flex gap-2 ">
                    <input onChange={handleChange} type="text" className="border-2 border-slate-300 rounded-md px-2 py-1 text-lg" placeholder="Nombre del equipo"/>
                    <button onClick={()=> name ? addNameEquipo(name) : alert('se debe ingresar el nombre')} className="bg-blue-500 w-10 rounded-full text-white text-lg">✔</button>
                </div> :
                <div className="flex gap-2 ">
                    <p className="text-3xl text-white underline">{equipo.name}</p>
                </div>
            }
            <div className="flex flex-row gap-3">
                <button onClick={()=> setFlatSearch(true)} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all">Agregar jugador</button>
                <button onClick={()=> setFlatSearch(true)} className="px-4 py-2 bg-green-800 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all">Guardar equipo</button>

            </div>
        </div>
        <div className="w-3/5 bg-lime-500 mt-10 min-h-96 rounded-sm p-10 flex flex-row flex-wrap justify-stretch gap-5">
            {
                equipo && 
                
                    
                        equipo.players.map((player: Player, index: number) => (
                            <div key={index} className="px-2 py-3 shadowCard flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-100 rounded-sm items-center gap-y-2 h-1/2">
                                <Image
                                    src={player.player_image}
                                    width={100}
                                    height={100}
                                    alt={player.player_name}
                                    className="rounded-full border-2 border-gray-200"
                                />
                                <p>{player.player_name}</p>
                                <button onClick={()=> deletePlayer(player.player_id)} className="text-red-500">Eliminar</button>
                            </div>
                        ))
                    
                
            }
        </div>
      <div className="w-full flex justify-center mt-5">
        {
            flatSearch && <PlayerSearch />
        }
      </div>
    </div>
  )
}

export default CrearCancha
