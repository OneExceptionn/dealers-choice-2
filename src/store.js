import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const SET_CHAMPIONS = "SET_CHAMPIONS"

const setChampions = (champions) => {
    return {
        type: SET_CHAMPIONS,
        champions
    }
}

export const getChampions = () => {
    return async (dispatch) => {
        const {data} = await axios.get('/champions')
        dispatch(setChampions(data))
    }
}

const SET_CHAMPION = "SET_CHAMPION"

const setChampion = (champion) => {
    return {
        type: SET_CHAMPION,
        champion
    }
}

export const getChampion = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/champions/${id}`)
        dispatch(setChampion(data))
    }
}

const championsReducer = (state = [], action) => {
    if(action.type === SET_CHAMPIONS){
        return action.champions
    }
    return state
}

const championReducer = (state = {}, action) => {
    if(action.type === SET_CHAMPION) {
        return action.champion
    }
    return state
}

const reducer = combineReducers({
    champions: championsReducer,
    champion: championReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store