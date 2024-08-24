// views/AutobotView.js
import { Autobot } from '../models/Autobot.js';
import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';

export const AutobotView = {
  getAutobots: async (req, res) => {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;

    const autobots = await Autobot.findAndCountAll({ limit, offset });
    res.json(autobots);
  },

  getAutobotPosts: async (req, res) => {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;

    const posts = await Post.findAndCountAll({ where: { autobotId: req.params.id }, limit, offset });
    res.json(posts);
  },

  getPostComments: async (req, res) => {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;

    const comments = await Comment.findAndCountAll({ where: { postId: req.params.id }, limit, offset });
    res.json(comments);
  },
};
