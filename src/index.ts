import express from "express";
import http from "http";
import socketio from "socket.io";

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get("/", (req, res) => {
    res.redirect("/index.html");
})

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log("someone connected");

    socket.on("vibes", () => {
        console.log("vibes");
        socket.emit("vibes");
    })
});

server.listen(3000, () => {
    console.log("listening on port 3000");
});
