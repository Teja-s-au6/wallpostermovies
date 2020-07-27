import { combineReducers } from 'redux';
import nowPlayingReducer from './nowPlaying';

export default combineReducers({
    nowPlaying: nowPlayingReducer
})