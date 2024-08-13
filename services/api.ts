import { PropLeage } from "@/interfaces/player";
import axios, { type ParamsSerializerOptions } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    params: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
})

export const fetchPlayers = async (name: string) =>{
    try {
        const response = await api.get(`/?action=get_players&player_name=${name}&APIkey=${process.env.NEXT_PUBLIC_API_KEY}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchPlayer = async (id: string) =>{
    try {
        const response = await api.get(`/?action=get_players&player_id=${id}&APIkey=${process.env.NEXT_PUBLIC_API_KEY}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}