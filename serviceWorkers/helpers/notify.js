import twilio from "twilio";
const accountSid = "AC738b984c278833aad29daabf9c84b676";
const authtoken = "f68c1791c2c5307d97df6550535fa712";

async function notification(userName, userPhone, task) {
  try {
    const client = new twilio(accountSid, authtoken);
    await client.messages.create({
      body: `Message! Hey ${userName}, This is a reminder that your task '${task}' is due.`,
      from: "+19206575386",
      to: userPhone,
    });
    console.log("SMS sent");
  } catch (error) {
    console.log(error);
  }
}
export default notification;
