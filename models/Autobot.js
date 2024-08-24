// models/Autobot.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const Autobot = sequelize.define("Autobot", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});
