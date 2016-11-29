import React from 'react'
import { movies } from '../data'

const Movies = () => {
	let MoviesElement = movies.map((movie)=>{
		return <div> movie: {movie.title} time: {movie.time} genres: {movie.genres} metascore: {movie.metascore} </div>
	})
    return (
        <div>
        	<h1>Movies Page</h1>
            {MoviesElement}
        </div>
    )
}

module.exports = Movies