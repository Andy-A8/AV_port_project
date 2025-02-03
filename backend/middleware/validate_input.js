// Middleware to validate input for sorting algorithms
const validateArray = (req, res, next) => {
  const { array } = req.body;

  if (!array || !Array.isArray(array)) {
    return res.status(400).json({ error: 'Input must be an array.' });
  }

  if (!array.every((item) => typeof item === 'number')) {
    return res.status(400).json({ error: 'All elements in the array must be numbers.' });
  }

  next(); // Proceed to the next middleware or route handler
};

// Middleware to validate input for searching algorithms
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

module.exports = { validateArray,  validateSearchInput };
