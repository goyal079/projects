import jwt from "jsonwebtoken";
import config from "config";
import AES from "crypto-js/aes.js";
function generateToken(obj) {
  let token = jwt.sign(
    {
      email: obj.email,
      fullname: obj.fullname,
      _id: obj._id,
      phone: obj.phone,
      verified: obj.verification.email.verified,
    },
    config.get("jwtkey"),
    { expiresIn: "1h" }
  );
  return AES.encrypt(token, config.get("aeskey")).toString();
}
export default generateToken;
