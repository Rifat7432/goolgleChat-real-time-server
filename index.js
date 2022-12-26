const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000 ;

const app = express();
const http = require("http");

const socketIo  = require("socket.io");
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = socketIo(server)

app.get("/", (req, res) => {
  res.send("GoogleChat real time server is working");
});




io.on("connection", (socket) => {
  socket.on('room',(data)=>{
socket.join(data.roomId)
  })
  
});

server.listen(port, () => console.log(`server is running on ${port}`));
