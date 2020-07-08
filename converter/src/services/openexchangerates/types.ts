export interface ApiConfig {
    baseUrl: string
    timeout: number
}

export interface ConvertRequest {
    value: number
    from: string
    to: string
}
export interface Request {
    query: string
    amount: number
    from: string
    to: string
}

export interface Meta {
    timestamp: number
    rate: number
}

export interface ConvertResult {
    disclaimer: string
    license: string
    request: Request
    meta: Meta
    response: number
}
