const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: ' User Management API ',
      version: '1.0.0',
      description: 'This is a CRUD API application made with Express and documented using Swagger.',
    },
  },
  apis: ['./index.js'], // path to the files with Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
