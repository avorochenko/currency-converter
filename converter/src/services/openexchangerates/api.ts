import axios, { AxiosInstance } from 'axios'
import { DEFAULT_API_CONFIG } from './config'
import {
    ApiConfig,
    ConvertResult,
    ConvertRequest
} from './types'

const OPENEEXCHANGERATES_APP_ID = process.env.OPENEEXCHANGERATES_APP_ID

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

    async convert(convertRequest: ConvertRequest): Promise<ConvertResult> {
        const responce = await this.instance
            .get(`/convert/${convertRequest.value}/${convertRequest.from}/${convertRequest.to}?app_id=${OPENEEXCHANGERATES_APP_ID}`)
        return responce.data as ConvertResult
    }
}

export const api = new Api(DEFAULT_API_CONFIG)
