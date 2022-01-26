import twilio from "twilio";
import config from "config";
const accountSid = "AC738b984c278833aad29daabf9c84b676";
const authtoken = "f68c1791c2c5307d97df6550535fa712";

async function sendSMS(userName, userPhone, token) {
  try {
    const client = new twilio(accountSid, authtoken);
    await client.messages.create({
      body: `Hey ${userName} Thanks for registering with us.Please click the <a href="${config.get(
        "url"
      )}/api/users/verifyphone/${userPhone}/${token}">link</a> to confirm your phone number. ThankYou`,
      from: "+19206575386",
      to: userPhone,
    });
    console.log("SMS sent");
  } catch (error) {
    console.log(error);
  }
}

export default sendSMS;
