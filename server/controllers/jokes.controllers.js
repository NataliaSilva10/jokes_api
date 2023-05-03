// Export a function to get all jokes

const Joke = require("../model/jokes.model");

// Export a function to get all jokes

const getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log(err));
};

// Export a function to get a single joke

const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
      .then((joke) => res.json(joke))
      .catch((err) => console.log(err));
  };

// Export a function to create a joke
const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
      .then((newJoke) => res.json(newJoke))
      .catch((err) => console.log(err));
  };
//   Use Postman to perform the POST DELETE and PUT operations and use the browser to GET them


const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedJoke) => res.json(updatedJoke))
      .catch((err) => console.log(err));
  };
  
  const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  };
  
  module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
  };


