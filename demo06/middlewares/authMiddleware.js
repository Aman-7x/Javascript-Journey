import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  if (!(req.headers.authorization || req.headers.Authorization)) {
    return res.status(401).json({ Error: "Not authenticate!!" });
  }

  const token =
    req.headers.authorization.split(" ")[1] ||
    req.headers.Authorization.split(" ")[1];

  if (!token) return res.status(401).json({ Error: "token missing!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, result) => {
    if (err) return res.status(401).json({ Error: "Session Expired!" });

    req.user = result.user;
    next();
  });
};
