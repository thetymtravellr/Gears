const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const clone = require("nodemon/lib/utils/clone");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b9kyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const inventoryCollection = client
      .db("inventoryManagement")
      .collection("inventory");

    //GET
    app.get("/inventory", async (req, res) => {

      let query;
      if (req.query.email) {
        const tokenInfo = req.headers.authorization;
        const decoded = verifyToken(tokenInfo);
        const email = req.query.email;

        if (email === decoded.email) {
          query = { email };
          const result = await inventoryCollection.find(query).toArray();
          res.send(result);
        } else {
          res.send({ message: "Unauthorized Access" });
        }

      } else {
        query = {};
        const result = await inventoryCollection.find(query).toArray();
        res.send(result);
      }

    });

    app.get("/inventory/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: ObjectId(id) };
      const result = await inventoryCollection.findOne(query);
      res.send(result);
    });

    //POST
    app.post("/inventory", async (req, res) => {
      const product = req.body;
      const tokenInfo = req.headers.authorization;
      const [email, accessToken] = tokenInfo.split(" ");
      const decoded = verifyToken(accessToken);
      if (email === decoded.email) {
        const result = await inventoryCollection.insertOne(product);
        res.send({ message: "Product Uploaded Successfully" });
      } else {
        res.send({ message: "Unauthorized Access" });
      }
    });

    app.post("/login", (req, res) => {
      const email = req.body;
      const token = jwt.sign(email, process.env.ACCESS_SECRET_TOKEN);
      res.send({ token });
    });

    //PUT
    app.put("/inventory/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateQuantity = {
        $set: {
          quantity: data.newQuantity,
        },
      };
      const result = await inventoryCollection.updateOne(
        filter,
        updateQuantity,
        options
      );
      res.send(result);
    });

    //DELETE
    app.delete("/inventory/:id", async (req, res) => {
      const { id } = req.params;
      console.log(id);
      const query = { _id: ObjectId(id) };
      const result = await inventoryCollection.deleteOne(query);
      if (result.deletedCount === 1) {
        res.send({message: 'successfully deleted'});
      } else {
        res.send({message: 'No documents matched the query'});
      }
    });
  } catch {}
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("node server is running");
});

app.listen(port, () => {
  console.log("port is running at http://localhost:", port);
});

// verify token function
function verifyToken(token) {
  let email;
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, function (err, decoded) {
    if (err) {
      email = "Invalid email";
    }
    if (decoded) {
      email = decoded;
    }
  });
  return email;
}
