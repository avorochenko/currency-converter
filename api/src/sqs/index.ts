import {Squiss} from 'squiss-ts';
import {MessageParams} from '../types'
import dotenv from "dotenv"

dotenv.config()

const QUEUE_CONVERTER_NAME = process.env.QUEUE_CONVERTER_NAME
const ACCESS_KEY_ID = process.env.SQS_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = process.env.SQS_SECRET_ACCESS_KEY
const REGION = process.env.SQS_REGION
const ENDPOINT = process.env.SQS_ENDPOINT

const awsConfig = {
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
  endpoint: ENDPOINT
};

const squiss = new Squiss({
  awsConfig,
  queueName: QUEUE_CONVERTER_NAME,
  bodyFormat: 'json',
  maxInFlight: 15
});

const sendMessage = async(params: MessageParams): Promise<void> => {
  squiss.sendMessage(params);
}

export {
  squiss,
  sendMessage
}