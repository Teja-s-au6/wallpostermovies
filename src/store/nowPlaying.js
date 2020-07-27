import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config'

export const fetchNowPlayingMovies = createAsyncThunk('movies/fetchNowPlayingMovies', async() => {
    try {
        const response = await axios.get(`${config.BASE_URL}/movie/now_playing?api_key=${config.API_KEY}`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
})

const slice = createSlice({
    name: "nowPlaying",
    initialState: { movies: null, isFetchingMovies: false },
    reducers:{},
    extraReducers: {
        [fetchNowPlayingMovies.pending] : (state, action) => {
            state.isFetchingMovies = true
        },
        [fetchNowPlayingMovies.fulfilled] : (state, action) => {
            state.movies = action.payload
            state.isFetchingMovies = false
        },
        [fetchNowPlayingMovies.rejected] : (state, action) => {
            state.isFetchingMovies = false
        }
    }
})

export default slice.reducer;