import nodemailer,{Transporter} from 'nodemailer'

import handlebars from 'handlebars'
import fs from "fs"


class SendMailService {
    private client: Transporter
    constructor(){

        nodemailer.createTestAccount().then(account =>{
            
            const transporter = nodemailer.createTransport({

                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,

                auth: {
                    user: account.user,
                    pass: account.pass
                }


            })


            this.client = transporter
        })
        

        
    }

    async execute(to:string,subject:string, variables:object, path:string){
       
        const templateFileContent = fs.readFileSync(path).toString("utf-8")


        const mailTemplateParse =  handlebars.compile(templateFileContent)

        const html =  mailTemplateParse(variables)

        const massage =  await this.client.sendMail({
            to, 
            subject,
            html,
            from:"NPS <noreplay@nps.com.br>"

         })
        console.log('Message sent: %s',massage.massageId)
        console.log('Preview URL: %s',nodemailer.getTestMessageUrl(massage))
    }

}

export default new SendMailService()