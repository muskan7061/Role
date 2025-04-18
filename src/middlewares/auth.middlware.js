const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

const authenticate = async (req, res, next) => {
  const token =req.headers.authorization?.split(" ")[1]; // req.cookies?.token || 
  console.log("===", req.headers.authorization );
  
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    console.log("---",decoded);
    const user = await User.findByPk(decoded.userId);
    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    console.log(decoded);
    
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

module.exports = { authenticate, authorize };
