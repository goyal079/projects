import nodemailer from "nodemailer";
import config from "config";
async function sendMail(userName, userEmail, token) {
  let transporter = nodemailer.createTransport({
    host: "mail.hgoyal.in",
    port: 465,
    secure: true,
    auth: {
      user: "noreply@hgoyal.in",
      pass: "joyboy*123",
    },
  });
  return await transporter.sendMail({
    from: `"Admin Goyal" <noreply@hgoyal.in>`, // sender address
    to: userEmail, // list of receivers
    subject: "Email Confirmation - Registered!", // Subject line
    text: "Test", // plain text body
    html: `Hey ${userName} <br/> Thanks for registering with us. <br/>Please click the <a href="${config.get(
      "url"
    )}/api/users/verifymail/${userEmail}/${token}">link</a> to confirm your email<br/>ThankYou`, // html body
  });
}

export default sendMail;
