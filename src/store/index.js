import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk';
import cart from './modules/cart'
const reducer = combineReducers({
    cart
})
export default createStore(
    reducer,
    applyMiddleware(thunk)
)