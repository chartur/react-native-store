import BaseService from './base.service';
import {endpoints} from '../env/env';
import {AxiosResponse} from 'axios';
import {Banner} from '../models/banner';

export default class BannersService extends BaseService {
  getAll(): Promise<AxiosResponse<Banner[]>> {
    return this.axios.get(endpoints.getAllBanners);
  }
}
