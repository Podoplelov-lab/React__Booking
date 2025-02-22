import * as Const from '../const'



export const getHotels = (keyword = 'MOW', subType = 'HOTEL_GDS') => {
    return fetch(`${Const.BASE_URL}/reference-data/locations/hotel?keyword=${keyword}&subType=${subType}`, {headers: {'Authorization': `Bearer ${Const.TOKEN}`}})
}


export const getHotelreitings = (hotelIds = "TELONMFS") => {
    return fetch(`${Const.BASE_URL2}/e-reputation/hotel-sentiments?hotelIds=${hotelIds}`, {headers: {'Authorization': `Bearer ${Const.TOKEN}`}})
}


export const sendOrders = ({phone, email}) => {
    return fetch(`${Const.BASE_URL2}/booking/hotel-orders`, {headers: {'Authorization': `Bearer ${Const.TOKEN}`}, method: 'POST', body: JSON.stringify({
        "data": {
          "type": "hotel-order",
          "guests": [
            {
              "tid": 1,
              "title": "MR",
              "firstName": "BOB",
              "lastName": "SMITH",
              "phone": phone,
              "email": email,
              "country": 'RU',
              "address": 'MOSCOW'
              'hotelName': 'RADISSON BLU BELORUSSKAYA MOW'
            }
          ],
          "travelAgent": {
            "contact": {
              "email": email
            }
          },
          "roomAssociations": [
            {
              "guestReferences": [
                {
                  "guestReference": "1"
                }
              ],
              "hotelOfferId": "4L8PRJPEN7"
            }
          ],
          "payment": {
            "method": "CREDIT_CARD",
            "paymentCard": {
              "paymentCardInfo": {
                "vendorCode": "VI",
                "cardNumber": "4151289722471370",
                "expiryDate": "2026-08",
                "holderName": "BOB SMITH"
              }
            }
          }
        }
      })})
}