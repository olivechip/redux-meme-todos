import { createSlice } from '@reduxjs/toolkit';

const initialState = { top: "", bottom: "", img: "" }
const memeSlice = createSlice({
    name: 'meme',
    initialState,
    reducers: {
        setTopText: (state, action) => {
            state.top = action.payload;
        },
        setBottomText: (state, action) => {
            state.bottom = action.payload;
        },
        setImage: (state, action) => {
            state.img = action.payload;
        },
        clear: () => initialState
    }
});

export const { setTopText, setBottomText, setImage, clear } = memeSlice.actions;
export default memeSlice.reducer;