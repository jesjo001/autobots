import { Autobot, Comment, Post } from "../models/index.js";

export const flushDatabase = async () => {
    try {
      console.log('Flushing the database...');
  
      // Truncate the tables
      await Comment.destroy({ where: {}, truncate: true });
      await Post.destroy({ where: {}, truncate: true });
      await Autobot.destroy({ where: {}, truncate: true });
  
      console.log('Database flushed successfully.');
    } catch (error) {
      console.error('Error flushing the database:', error);
    }
};