import express from 'express';
import { sequelize } from './config/db.config.js';
import cron from 'node-cron';
import { AutobotPresenter } from './presenters/AutobotPresenter.js';
import apiRoutes from './routes/api.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the CORS middleware
import swaggerDocs from './docs/swagger.js';
// Import models to ensure they are initialized and associations are set
import './models/index.js';

dotenv.config();
const app = express();
app.use(cors());
// JSON parsing middleware
app.use(express.json());
// You can also configure CORS with specific options, such as allowing only certain origins:
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies if needed
}));
// Sync database
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced successfully.');
}).catch(err => {
  console.error('Failed to sync database:', err);
});

// Schedule the autobot creation every hour
cron.schedule('0 * * * *', () => {
  AutobotPresenter.createAutobotsJob();
});

// // Swagger setup
// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "TweetAI API",
//       version: "1.0.0",
//       description: "API documentation for TweetAI",
//     },
//     servers: [{ url: "http://localhost:3000" }],
//   },
//   apis: ["./routes/*.js"],
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000.");
});
