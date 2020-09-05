const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

// import the middlewares
const middlewares = require('./middlewares');
// import the api routes
const TodoApi = require('./api/todo');


const app = express();

// connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// use the dependencies
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});

app.use('/api/todo', TodoApi);

// not found middlewares
app.use(middlewares.notFoundMiddleware);
app.use(middlewares.errorHandlerMiddleware);

const port = process.env.PORT || 1337;
app.listen(port, console.log(`Server is listening to port ${port}`));

