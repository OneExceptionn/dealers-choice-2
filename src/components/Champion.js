import React from 'react'
import { connect } from 'react-redux'
import { getChampion } from '../store'


class Champion extends React.Component {
    componentDidMount() {
        this.props.getChampion(this.props.match.params.id)
    }

    render() {
        const { champion } = this.props
        return (
            <div>
                <img src={champion.image} width="150" height="100"></img>
                <ul>
                    <li>Name: {champion.name}</li>
                    <li>Region: {champion.region}</li>
                    <li>Lane: {champion.lane}</li>
                    <li>Damage Type: {champion.damageType}</li>
                    <li>Name: {champion.name}</li>
                </ul>
            </div>
        )        
    }
}

const mapState = (state) => (
    {
        champion: state.champion
    }
)

const mapDispatch = (dispatch) => {
    return {
        getChampion: (championid) => dispatch(getChampion(championid))
    }
}

export default connect(mapState, mapDispatch)(Champion)