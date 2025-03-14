import * as Const from '../const'



export const getHotels = (keyword = 'MOW', subType = 'HOTEL_GDS') => {
    return fetch(`${Const.BASE_URL}/reference-data/locations/hotel?keyword=${keyword}&subType=${subType}`, { headers: { 'Authorization': `Bearer ${Const.TOKEN}` } })
}


export const getHotelreitings = (hotelIds = "TELONMFS") => {
    return fetch(`${Const.BASE_URL2}/e-reputation/hotel-sentiments?hotelIds=${hotelIds}`, { headers: { 'Authorization': `Bearer ${Const.TOKEN}` } })
}


export const getBooking =  () => {
    return fetch("http://localhost:5000/users");
};

export const deletBooking = (id: string) => {
   return  fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
} 