import {Squiss, Message} from 'squiss-ts';
import {api} from '../services/openexchangerates'
import {sendMail} from '../services/mailer'
import {ConvertRequest} from '../services/openexchangerates'
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

squiss.on('message', async (message: Message) => {

  const convertRequest: ConvertRequest = message.body.message

  const result = await api.convert(convertRequest)

  sendMail({
    from: '"Fred Foo" <foo@example.com>', 
    to: `${message.body?.message.email}`,
    subject: "Hello. Currency Converted✔",
    text: `Convert ${result.request.amount}${result.request.from} to ${result.request.to}s. Result: ${result.response}${result.request.to}`,
    html: "<b>Hello</b>",
  })

  message.del();
});

export {
  squiss
}