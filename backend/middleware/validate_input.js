const validateArray = (req, res, next) => {
  const { array } = req.body;

  if (!array || !Array.isArray(array)) {
    return res.status(400).json({ error: 'Input must be an array.' });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = { validateArray };
