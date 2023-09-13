const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found")

const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json())


//routes

app.use(notFound);
app.use('/api/v1/tasks', tasks)

const port = 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
