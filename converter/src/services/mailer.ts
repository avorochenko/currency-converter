
const sendMail = async(mail: Mail): Promise<boolean> => {
  return Promise.resolve(true)
}

interface Mail {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

export {
  Mail,
  sendMail
}