const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
const routes = require("./routes")
require('./database');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use("/api", routes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});