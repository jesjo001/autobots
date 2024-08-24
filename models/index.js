import { Autobot } from './Autobot.js';
import { Post } from './Post.js';
import { Comment } from './Comment.js';

// Define associations with unique aliases
Autobot.hasMany(Post, { as: "autobotPosts", foreignKey: 'autobotId' });
Post.belongsTo(Autobot, { as: "autobotOwner", foreignKey: 'autobotId' });

Post.hasMany(Comment, { as: "postComments", foreignKey: 'postId' });
Comment.belongsTo(Post, { as: "commentedPost", foreignKey: 'postId' });

// Export the models for use elsewhere
export { Autobot, Post, Comment };
