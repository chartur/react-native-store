import {Product} from '../models/product';
import { LoadedDataActionPayload } from '../abstraction/LoadedDataActionPayload';

export enum ActionTypes {
  GET_ALL = '[PRODUCTS] get all',
  GET_BEST_SELLERS = '[PRODUCTS] get best sellers',
  DATA_LOADED = '[PRODUCTS] data loaded',
}

export const getAllProductsAction = (payload: Product[]) => ({
  type: ActionTypes.GET_ALL,
  payload,
});

export const getBestSellersProductsAction = (payload: Product[]) => ({
  type: ActionTypes.GET_BEST_SELLERS,
  payload,
});

export const productsLoaded = (payload: LoadedDataActionPayload) => ({
  type: ActionTypes.DATA_LOADED,
  payload,
});
