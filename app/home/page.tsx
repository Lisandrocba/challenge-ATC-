"use client"
import Cancha from "@/components/Cancha";
import PlayerSearch from "@/components/PlayerSearch";
import { usePlayerContext } from "@/context/PlayerContext";
import { Player } from "@/interfaces/player";
import { useState } from "react";

const HomePage = () => {
  const {handleSelectPlayer, deletePlayer} = usePlayerContext()

  return (
    <div className="flex flex-col justify-center items-center gap-y-6 w-full relative">
      <div className="flex flex-row justify-start items-center w-full gap-5 px-5 mt-10">
       {/*  <div className="w-full">
          <h1 className="text-3xl underline text-gray-900 mb-5">Equipo titular</h1>
          <Cancha
            players={cancha1Players}
            onAddPlayer={() => setSelectingCancha(1)}
            deletePlayer={deletePlayer}
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl underline text-gray-900 mb-5">Equipo Suplente</h1>
          <Cancha
            players={cancha2Players}
            onAddPlayer={() => setSelectingCancha(2)}
            deletePlayer={deletePlayer}
          />
        </div> */}
      </div>
      {/* {selectingCancha && (
        <PlayerSearch onSelectPlayer={handleSelectPlayer}/>
      )} */}
    </div>
  );
};

export default HomePage;
