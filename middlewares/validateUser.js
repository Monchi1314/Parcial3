const validateUser = (req, res, next) => {
    const { user, password, name } = req.body;
  
    if (!user || !password || !name) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }
  
    next();
  };
  
  module.exports = validateUser;
  