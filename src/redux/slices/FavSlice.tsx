import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserDataType = {
  id: string;
  name: string;
  gender: string;
  image: string;
  house: string;
};

// The state type is now directly an array of CartItemType
type FavState = UserDataType[];

const initialState: FavState = [];

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<UserDataType>) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    removeFromFav: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addToFav, removeFromFav} = favSlice.actions;
export default favSlice.reducer;
