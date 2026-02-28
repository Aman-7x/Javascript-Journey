export const authorized = (...roles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ Error: "Not authenticate!!" });

    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ Error: `Access denied , Role ${req.user.role} not allowed` });
    }

    next();
  };
};
