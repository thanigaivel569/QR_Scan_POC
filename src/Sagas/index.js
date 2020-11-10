import {getProductWatcher} from './ProductSaga';


export default function* rootSaga() {
  yield getProductWatcher()
}