import { SESClient, SendEmailCommand, SendEmailCommandInput } from "@aws-sdk/client-ses";
import { NextApiRequest, NextApiResponse } from "next";

const client = new SESClient({ region: "us-east-2"});

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const params : SendEmailCommandInput = {
    Destination: {
      ToAddresses: [
        "info@meganlott.com"
      ],
      CcAddresses: [
        "meg.d.lott@gmail.com"
      ]
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: '[MEGAN LOTT LLC] New Inquiry'
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "HTML_FORMAT_BODY"
         },
         Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY"
         }
        },
      },
      Source: 'info@meganlott.com',
    };

  const command = new SendEmailCommand(params);
  try {
    await client.send(command);
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default sendEmail;