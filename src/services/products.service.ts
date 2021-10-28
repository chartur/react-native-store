import BaseService from './base.service';
import {endpoints} from '../env/env';
import {AxiosResponse} from 'axios';
import {Product} from '../models/product';

export default class ProductsService extends BaseService {
  getBestSellerProducts(): Promise<AxiosResponse<Product[]>> {
    return this.axios.get(endpoints.getBestSellerProducts);
  }
}
