const validateSearchInput = (req, res, next) => {
  const { array, target } = req.body;

  if (!array || !Array.isArray(array)) {
    return res.status(400).json({ error: 'Input must be an array.' });
  }
  if (typeof target === 'undefined') {
    return res.status(400).json({ error: 'Target value is required.' });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = { validateSearchInput };
