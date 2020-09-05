const notFoundMiddleware = (req, res, next) => {
    const error = new Error(`(Error) Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandlerMiddleware = (error, req, res, next) => {
    console.log(error);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '-_- production 😉' : error.stack
    });
}

module.exports = {
    notFoundMiddleware,
    errorHandlerMiddleware
}