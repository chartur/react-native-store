import {Product} from '../models/product';
import {Action} from '../abstraction/Action';
import {ActionTypes} from '../actions/prodcts.action';

interface ProductsReducerState {
  allProducts: {
    products: Product[];
    loaded: boolean;
  };
  bestSellersProducts: {
    products: Product[];
    loaded: boolean;
  };
}

const initialState: ProductsReducerState = {
  allProducts: {
    products: [],
    loaded: false,
  },
  bestSellersProducts: {
    products: [],
    loaded: false,
  },
};

export const productsReducer = (
  state: ProductsReducerState = initialState,
  action: Action,
): ProductsReducerState => {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      return {
        ...state,
        allProducts: {
          ...state.allProducts,
          products: action.payload,
        },
      };
    case ActionTypes.GET_BEST_SELLERS:
      return {
        ...state,
        bestSellersProducts: {
          ...state.bestSellersProducts,
          products: action.payload,
        },
      };
    case ActionTypes.DATA_LOADED:
      return {
        ...state,
        [action.payload.stateKey]: {
          ...state[action.payload.stateKey],
          loaded: action.payload.value,
        },
      };
    default:
      return state;
  }
};
