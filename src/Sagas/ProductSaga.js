import * as ProductAction from '../Action/ProductAction';
import * as ProductActionTypes from '../ActionTypes/ProductActionTypes';
import { put, takeLatest } from "redux-saga/effects";

let url = "http://localhost:4000/products"

export function* getProductSaga(){
    try {
        let result = yield fetch(url).then(result => result.json());
        yield put (ProductAction.getProductSuccess(result)); 

    } catch(error){

        yield put (ProductAction.getProductFailure(error));

    }

}

export function*  getProductWatcher(){
    yield takeLatest(ProductActionTypes.GET_PRODUCT,getProductSaga)
}