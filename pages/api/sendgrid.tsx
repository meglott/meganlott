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
      html: `<div>
                <h1 style="color:#45b09a">MEGAN LOTT LLC<h1>
            </div>
            <div>
                <p>Name: ${req.body.firstname} ${req.body.lastname}</p>
                <p>Email: ${req.body.email}</p>
                <p>Phone Number: ${req.body.phonenumber}</p>
                <p>Message: <br />${req.body.message}</p>
            </div>`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;