import {Banner} from '../models/banner';

export enum ActionTypes {
  GET_ALL = '[BANNERS] get all',
  DATA_LOADED = '[BANNERS] data loaded',
}

export const getAllBannersAction = (payload: Banner[]) => ({
  type: ActionTypes.GET_ALL,
  payload,
});

export const bannersLoaded = (payload: boolean) => ({
  type: ActionTypes.DATA_LOADED,
  payload,
});
