const fs = require('fs');

const regAccess = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.rawHeaders}\n`;
  fs.appendFileSync('access.log', log);
  next();
};

module.exports = regAccess;
