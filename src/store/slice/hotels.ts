import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Hotel } from '../../types/hotel'

export interface HotelsState {
  data: Hotel[] | null,
  selectedHotel: Hotel | null
}

const initialState: HotelsState = {
  data: null,
  selectedHotel: null
}


export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[] | null>) => {
      state.data = action.payload
    },
    setSelectedHotel: (state, action: PayloadAction<Hotel | null>) => {
      state.selectedHotel = action.payload
    }
  },
})


// Action creators are generated for each case reducer function
export const { setHotels, setSelectedHotel } = hotelsSlice.actions


export default hotelsSlice.reducer