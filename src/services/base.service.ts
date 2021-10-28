import {env} from '../env/env';
import axios, {AxiosInstance} from 'axios';

export default class BaseService {
  protected axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(env);
  }
}
