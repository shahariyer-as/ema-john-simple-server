const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}-${process.env.DB_PASSWORD}@cluster0.wsk2b.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("emaJohn").collection("Products");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("ema-john-server is running");
});
app.listen(port, () => {
  console.log("ema jon is running", port);
});
