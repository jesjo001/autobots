// services/AutobotService.js
import axios from 'axios';
import { Autobot } from '../models/Autobot.js';
import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';

export const createAutobots = async () => {
  for (let i = 0; i < 500; i++) {
    const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userData = userResponse.data[i];

    console.log('creating autobots', userData)
    const autobot = await Autobot.create({
      username: userData.username,
      email: userData.email,
    });

    for (let j = 0; j < 10; j++) {
      const postResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const postData = postResponse.data[j];

      const post = await Post.create({
        title: `${postData.title}-${i}-${j}`,
        body: postData.body,
        autobotId: autobot.id,
      });
    console.log("creating autobot's post")

      for (let k = 0; k < 10; k++) {
        const commentResponse = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const commentData = commentResponse.data[k];
        console.log("creating autobot's comments: ", commentData)

        await Comment.create({
          body: commentData.body,
          postId: post.id,
        });
      }
    }
  }
};
