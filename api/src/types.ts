export interface MessageParams {
  name: string
  message: Message
}

export interface Message {
  value: number
  from: string
  to: string
  email: string
}