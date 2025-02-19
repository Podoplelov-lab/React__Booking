import { configureStore} from '@reduxjs/toolkit'
import hotelsReducer from './slice/hotels.ts'
import geocodeReducer  from './slice/geocode.ts'



export const store = configureStore({
  reducer: {hotels: hotelsReducer, geocode: geocodeReducer},
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch