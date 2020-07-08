import axios, { AxiosInstance } from 'axios'
import { DEFAULT_API_CONFIG } from './config'
import {
    ApiConfig,
} from './types'

export class Api {
    baseURL: string
    timeout: number
    headers: any
    instance: AxiosInstance

    constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
        ;(this.baseURL = config.baseUrl),
            (this.timeout = config.timeout),
            (this.headers = {
                Accept: 'application/json',
            }),
            (this.instance = axios.create({
                baseURL: this.baseURL,
                timeout: this.timeout,
                headers: this.headers
            }))
    }

    async currencies(): Promise<JSON> {
        const responce = await this.instance
            .get('/currencies.json')
        return responce.data
    }
}

export const api = new Api(DEFAULT_API_CONFIG)
