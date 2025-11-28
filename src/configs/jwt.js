const jwt = require("jsonwebtoken");

/**
 * Middleware that verifies a JWT token in the Authorization header of the request.
 * If the token is missing, invalid or expired, it returns a 401 or 403 status code respectively.
 * Otherwise, it sets the decoded user in the req.user attribute and calls next() to continue the request.
 */
const jwtConfig = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    next();
  });
};


module.exports = jwtConfig;