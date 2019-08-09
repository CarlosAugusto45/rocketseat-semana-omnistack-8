const axios = require("axios");
const Dev = require("../models/Dev");
const request = require('request');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });

    return res.json(users);
  },

  async store(req, res) {

    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    //const response = await axios.get(`https://api.github.com/users/${username}`);
    const response = await request(
      {
        uri: `https://api.github.com/users/${username}`,
        method: "GET",
        proxy: "http://login:password@host:port",
        json: true,
        headers: { 'user-agent': 'node.js' }
      },
      async (error, response, body) => {
        const { name, bio, avatar_url: avatar } = response.body;

        const dev = await Dev.create({
          name,
          user: username,
          bio,
          avatar
        });

        return res.json(dev);
      }
    );

  }
};
