import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//auth middleware to check token
export const auth = async (req, res, next) => {
  const header = req.headers.authorization || req.headers.Authorization;

  if (!header)
    return res.status(401).json({ Error: "Authentication token missing" });

  const token = header.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ Error: "Session Expired!" });

    req.user = decoded.user;
    next();
  });
};
