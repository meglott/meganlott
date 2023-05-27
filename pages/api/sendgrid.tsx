import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

if (process.env.SENDGRID_API_KEY) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  throw new Error("SENDGRID_API_KEY environment variable is not set")
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: "info@meganlott.com",
      from: "info@meganlott.com",
      cc: `${req.body.email}`,
      subject: "[MEGANLOTT] New Inquiry",
      html: `<div style="background-color:gray; width: 100%; height: 100%">
            <div style="background-color:white; text-align:center; width:80%; height:80%; margin:auto; padding-top:15px;">
                <h1 style="color:#45b09a">MEGAN LOTT LLC<h1>
                <p style="font-size: 12px">Name:  ${req.body.firstname} ${req.body.lastname}</p>
                <p style="font-size: 12px">Email: ${req.body.email}</p>
                <p style="font-size: 12px"><b>Phone Number:</b> ${req.body.phonenumber}</p>
                <p style="font-size: 12px"><b>Message:</b> <br />${req.body.message}</p>
            </div>
        </div>`,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;