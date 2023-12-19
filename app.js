const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
  errors,
} = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');

// const fs = require('fs');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })

const { DB } = require('./utils/config');
const routes = require('./routes/index');
const { PORT} = require('./utils/constants');
const rateLimiter = require('./middlewares/rateLimiter');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
app.use(rateLimiter);
/* app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename;
  },
})); */

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect(DB);
app.listen(PORT, () => {
});
