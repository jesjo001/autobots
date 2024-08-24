// docs/swagger.js
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "TweetAI API",
      version: "1.0.0",
      description: "API documentation for TweetAI",
    },
    servers: [
      {
        url: "http://localhost:3000", // Update with your server URL
      },
    ],
  },
  apis: ["./docs/swaggerAnnotations.js"], // Reference to the annotation file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
