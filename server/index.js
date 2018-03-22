const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const msgController = require("./controllers/messages_controller");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", msgController.Create);
app.get("/api/messages", msgController.Read);
app.put("/api/messages/:id", msgController.Update);
app.delete("/api/messages/:id", msgController.Delete);

app.listen(port, () => {
  console.log(`I am listening to port number ${port}`);
});
