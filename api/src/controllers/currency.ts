import { Request, Response } from 'express'
import {api} from '../services/openexchangerates'
import {sendMessage} from '../sqs'
import { MessageParams } from '../types'


export const getAllCurrenciesAction = async (request: Request, response: Response) => {

    const currencies = await api.currencies()

    response.send(currencies);
}

export const convertAction = async (request: Request, response: Response) => {

  const { value, from, to, email } = request.params
  const messageParams: MessageParams = {
    name: 'converter',
    message: {
      value: +value,
      from,
      to,
      email
    }
  }

  sendMessage(messageParams)

  response.send(true);
}