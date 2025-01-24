exports.getAllAlgorithms = (req, res) => {
  res.json({
    algorithms: [
      { name: "Bubble Sort", description: "A simple sorting algorithm." },
      { name: "Quick Sort", description: "A divide-and-conquer sorting algorithm." },
    ],
  });
};

exports.getAlgorithmByName = (req, res) => {
  const { name } = req.params;
  res.json({
    name,
    description: `${name} is a placeholder for now.`,
  });
};

