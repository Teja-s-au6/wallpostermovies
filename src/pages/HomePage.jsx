import React, { Component } from 'react';
import { fetchNowPlayingMovies } from '../store/nowPlaying';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import '../styles/HomePage.css'
class HomePage extends Component {

    componentDidMount() {
        this.props.fetchNowPlayingMovies()
    }
    render() {
        console.log(this.props.nowPlaying)
        return this.props.nowPlaying ? 
        <div style={{ padding: "10px", display: "flex", flexDirection:"row", flexWrap: "wrap" }} className="homepage">
        {this.props.nowPlaying.results.map(movie =>   <MoviesList movie={movie} key={movie.id} />)}
   
        </div>  : <h1 className="homepage">Loading</h1>
    }
}

const mapStateToProps = storeState => {
    return {
        nowPlaying : storeState.features.nowPlaying.movies
    }
}

export default connect(mapStateToProps, {fetchNowPlayingMovies})(HomePage)
