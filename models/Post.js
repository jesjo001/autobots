// models/Post.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    unique: true,
  },
  body: {
    type: DataTypes.TEXT,
  },
});
