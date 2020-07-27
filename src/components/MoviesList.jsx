import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/MovieList.css';
class MoviesList extends Component {
    render() {
        return (
            <div className="container">
			<img src={`https://image.tmdb.org/t/p/w154/${this.props.movie.poster_path}`} alt="movie" className="image" />
			<p className="title">{this.props.movie.original_title}e</p>
			<div className="overlay" />
			<div className="button">
				<Link to={`/movie/${this.props.movie.id}`}> View </Link>
			</div>
		</div>
        )
    }
}

export default MoviesList
