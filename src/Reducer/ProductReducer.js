import * as ProductActionType from '../ActionTypes/ProductActionTypes';

export default function productReducer(state= {Products:[] ,ProductsError:{}, isLoading:false},action){
    switch(action.type){
        case ProductActionType.GET_PRODUCT:
      return {
        ...state,
        isLoading: true
      };
        case  ProductActionType.GET_PRODUCT_SUCCESS:
        return { Products:action.payload ,isLoading: false }

        case ProductActionType.GET_PRODUCT_FAILURE:
        return {ProductsError:action.payload,isLoading: false}

        default:
        return state;
    }
}
