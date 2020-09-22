import React from 'react'
import { getChampions } from '../store'
import { connect } from 'react-redux'
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import ChampionList from './ChampionList'
import Champion from './Champion'


class Main extends React.Component {
    componentDidMount(){
        this.props.getChampions()
    }

    render() {
        return (
            <Router>
                <div>
                    <ul id='nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/champions'>Champions</Link></li>
                    </ul>
                    <Route path='/' exact />
                    <Route path='/champions' exact component={ChampionList} />
                    <Route path='/champions/:id' exact component={Champion} />
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getChampions: () => dispatch(getChampions())
    }
}

export default connect(null, mapDispatchToProps)(Main)