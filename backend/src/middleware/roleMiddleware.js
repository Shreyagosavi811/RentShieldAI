module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (req.userRole !== requiredRole) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
const User = require("../models/User");

const decoded = jwt.verify(token, "secretkey");

const user = await User.findById(decoded.id);

req.user = decoded;
req.userRole = user.role;