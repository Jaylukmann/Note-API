const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    return res.status(200).json({ message: `[${new Date().toISOString()}] ${req.method} ${req.path}` });
    next();
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        return res.status(200).json({ message: 'Connected to MongoDB' });
    }catch (error) {
        return res.status(500).json({ message: 'Failed to connect to MongoDB', error: error.message });
        process.exit(1);
    }
};
connectDB();

app.use('/api/note', (res, req, next) => {
    return res.status(200).json({
        status: 'success',
        message: 'Note API is running',
        endpoint: {
            notes: '/api/note',}
    });
});

app.use((req, res, next) => {
    return res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl}`
    });
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
