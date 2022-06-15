import { configureStore, combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from './pokemonSlice'

// const rootReducer = combineReducers({
//     pokemon: pokemonReducer
// })

// export default configureStore({reducer: {rootReducer}})
export default configureStore(
    {
        reducer: {
        pokemon: pokemonReducer
        }})

