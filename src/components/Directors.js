import React from 'react'
import { directors } from '../data'

const Directors = () => {
	let directorsElement = directors.map((director)=>{
		return <div>director: {director.name} movies: {director.movies}</div>
	})
    return (
        <div>
        	<h1>Directors Page</h1>
            {directorsElement}
        </div>
    )
}

module.exports = Directors
