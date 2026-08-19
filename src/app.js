  require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const noteRoutes = require("./routes/noteRoutes");


const app = express();
connectDB();

app.use(express.json());
app.use("/api/notes",noteRoutes);
app.use(logger);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


















