import React from 'react'

const PlayerCard = props => {
    console.log(props)
    return (
        <div className="player-card" key={props.player.id}>
            <h2>{props.player.name}</h2>
            <h4>Country: {props.player.country}</h4>
        </div>
    )
}

export default PlayerCard
