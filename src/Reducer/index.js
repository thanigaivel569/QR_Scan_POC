import ProductReducer from './ProductReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    productsInfo :ProductReducer
})

export default rootReducer;
