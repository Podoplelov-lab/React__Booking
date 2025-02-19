import { useDispatch } from "react-redux"
import useFetch from "./useFetch"
import { useEffect } from "react"
import { setHotels } from "../store/slice/hotels"
import { getHotels } from "../api/hotels"


export default function useHotels () {
    const dispatch = useDispatch()

  const { data } = useFetch(getHotels)
  useEffect(() => {
    if(data){
        dispatch(setHotels(data))
    }
  },[data])
}