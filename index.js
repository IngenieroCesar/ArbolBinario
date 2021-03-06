const express = require('express');
const app = express();
const cors = require('cors');

const config = require('./config/index');

const swaggerUi = require('swagger-ui-express');

// const adapter = require('./lib/redisEvents');
// const { 
//     logErrors, 
//     errorHandler, 
//     wrapErrors
//   } = require('./utils/middleware/errorHandlers');

// const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(cors());
app.use(express.json());

//swagger
const swaggerDoc = require('./swagger.json');
app.use('/api/swagger/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//Api Router
const router = require('./routes/index');
router(app);

// Catch 404
// app.use(notFoundHandler);

// Errors middleware
// app.use(logErrors);
// app.use(wrapErrors);
// app.use(errorHandler);

app.listen(config.port, function () {  
  console.log(`Aplicacion iniciada en http://localhost:${config.port}`);
});