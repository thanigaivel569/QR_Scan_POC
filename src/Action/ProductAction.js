import * as ProductActionTypes from '../ActionTypes/ProductActionTypes';

 
export function getProduct(){
    return{
    type:ProductActionTypes.GET_PRODUCT
    }
}

export function getProductSuccess(data){
    return{
        type:ProductActionTypes.GET_PRODUCT_SUCCESS,
        payload:data
    }
}

export function getProductFailure(error){
    return{
        type:ProductActionTypes.GET_PRODUCT_FAILURE,
        payload:error
    }
}