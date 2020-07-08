import { ApiConfig } from './types'

const API_URL = 'https://openexchangerates.org/api'

export const DEFAULT_API_CONFIG: ApiConfig = {
    baseUrl: API_URL,
    timeout: 10000
}
