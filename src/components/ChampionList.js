import React from 'react'
import { connect } from 'react-redux'
import Champion from './Champion'
import { Link } from 'react-router-dom'

const ChampionList = ( { champions } ) => {
    return (
        champions.map(champion => {
            return (
                <div key={champion.id}>
                    <Link to={`/champions/${champion.id}`}> {champion.name} </Link>                    
                </div>
            )
        })
    )
}

const mapState = state => ( { champions: state.champions } )


export default connect (mapState)(ChampionList)