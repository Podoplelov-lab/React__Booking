export type Hotel = {
    id: number,
    name: string,
    iataCode: string,
    subType: string,
    relevance: number,
    type: string,
    hotelIds: string[],
    address: {
        cityName: string,
        countryCode: string 
    }
    geoCode : {
        latitude: number,
        longitude: number
    }
}