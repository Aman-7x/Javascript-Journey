import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const headers = req.headers.authorization || req.headers.Authorization;

  if (headers) {
    const token = headers.split(" ")[1];

    if (!token) return res.status(401).json({ Error: "Token Not Found" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ Error: "Session Expired!!" });

      req.user = decoded.user;
      next();
    });
  } else {
    return res.status(401).json({ Error: "Headers Not Found" });
  }
};
    