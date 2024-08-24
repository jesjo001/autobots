// models/Comment.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const Comment = sequelize.define("Comment", {
  body: {
    type: DataTypes.TEXT,
  },
});
