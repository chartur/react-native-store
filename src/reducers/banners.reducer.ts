import {Action} from '../abstraction/Action';
import {ActionTypes} from '../actions/banners.action';
import {Banner} from '../models/banner';

interface BannersReducerState {
  images: Banner[];
  loaded: boolean;
}

const initialState: BannersReducerState = {
  images: [],
  loaded: false,
};

export const bannersReducer = (
  state: BannersReducerState = initialState,
  action: Action,
): BannersReducerState => {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      return {
        ...state,
        images: action.payload,
      };
    case ActionTypes.DATA_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };
    default:
      return state;
  }
};
