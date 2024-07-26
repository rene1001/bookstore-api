const Genre = require('../models/genre');

exports.getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.json(genre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createGenre = async (req, res) => {
  const genre = new Genre(req.body);
  try {
    const newGenre = await genre.save();
    res.status(201).json(newGenre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.json(genre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.json({ message: 'Genre deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
