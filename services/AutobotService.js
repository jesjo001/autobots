// services/AutobotService.js
import axios from 'axios';
import { Autobot } from '../models/Autobot.js';
import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';
import cron from 'node-cron';
import { flushDatabase } from '../config/flushDb.js';

export const createAutobots = async () => {
  for (let i = 0; i < 500; i++) {
    const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userData = userResponse.data[i];

    console.log('creating autobots', userData)
    if(userData){
        const autobot = await Autobot.create({
            username: userData?.username + Date.now().toString(),
            email: `${userData?.username}'s email: ` + userData.email,
        });
      
          for (let j = 0; j < 10; j++) {
            const postResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const postData = postResponse.data[j];
            console.log("creating autobot's post")
      
            const post = await Post.create({
              title: `${postData.title}-${i}-${j}`,
              body: postData.body,
              autobotId: autobot.id,
            });
      
            for (let k = 0; k < 10; k++) {
              const commentResponse = await axios.get("https://jsonplaceholder.typicode.com/comments");
              const commentData = commentResponse.data[k];
              console.log("creating autobot's comments: ")
      
              await Comment.create({
                body: commentData.body,
                postId: post.id,
              });
            }
        }
    } else console.log("No data from api!!, Data exhausted!! ")
  }
};


// Function to start Autobot creation immediately
export const startAutobotCreation = () => {
    try {
      console.log('Starting initial Autobot creation...');
      createAutobotsJob();
      console.log('Initial Autobot creation completed.');
    } catch (error) {
      console.error('Error during initial Autobot creation:', error);
    }
};

export const scheduleAutobotCreation = () => {
    cron.schedule('0 * * * *', async () => {
        console.log('Running scheduled Autobot creation job...');
        await flushDatabase();
        await createAutobotsJob();
        console.log('Scheduled Autobot creation job completed.');
    });
};