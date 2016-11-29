import React from 'react'
import { actors } from '../data'

const Actors = () => {
	let actorsElement = actors.map((actor)=>{
		return <div>Name: {actor.name} Movies: {actor.movies}</div>
	})
    return (
        <div>
            <h1>Actors Page</h1>
            {actorsElement}
        </div>
    )
}

module.exports = Actors
