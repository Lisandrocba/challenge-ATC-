"use client"
import { useState } from "react";
import HomePage from "./home/page";
import { useRouter } from "next/navigation";

const Inicio = () => {
  const [user, setUser] = useState('')
  const router = useRouter();

  const ingresar =()=>{
    if(!user) return alert('Debe ingresar un nombre de usuario')
    sessionStorage.setItem('user', user)
    router.push('/home')
  }

  return (
  <div className="p-5 flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to-gray-800 h-full min-h-screen">
    <div className="w-2/3 flex flex-col justify-center items-center gap-4 py-10 bg-gray-900 rounded-md">
      <p className="text-2xl text-white">Nombre de usuario</p>
      <input onChange={(e)=> setUser(e.target.value)} type="text" className="border-2 border-zinc-400 rounded-lg px-2 py-1 text-lg"/>
      <button onClick={ingresar} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 cursor-pointer transition-all">Ingresar</button>
    </div>
  </div>
  );
};

export default Inicio;
