import { Player } from '@/interfaces/player'
import Image from 'next/image';
import React from 'react'

const Cancha = ({
    players,
    onAddPlayer,
    deletePlayer
  }: {
    players: Player[];
    onAddPlayer: () => void;
    deletePlayer: (id: number)=> void;
  }) => {

 return (
    <div className="w-full flex flex-col gap-y-2">
    {players?.length < 5 && (
        <button
          onClick={()=> onAddPlayer()}
          className="w-10 h-10 rounded-full bg-blue-600 text-white text-2xl opacity-60 hover:opacity-100 transition-all border-2 border-gray-400"
        >
          +
        </button>
      )}
    <div className="bg-green-600 min-h-96 w-full p-5 flex flex-row flex-wrap justify-center items-center gap-x-36 gap-y-10 rounded-lg m-2">
      {
        players?.length > 0 ?
      players.map((player, index) => (
        <div key={index} className='w-1/4'>
          <Image
            src={player.player_image}
            width={50}
            height={50}
            alt={player.player_name}
            className="rounded-full border-2 border-gray-200"
          />
          <p>{player.player_name}</p>
          <button onClick={()=> deletePlayer(player.player_id)} className='px-2 bg-red-500 rounded-full text-gray-50 font-bold'>x</button>
        </div>
      )) :
      <div className='bg-green-600 p-5 rounded-md'>

      </div>
      }
    </div>
    </div>
  );
}

export default Cancha
