const { app } = require('./server.js');
// const ws = require('ws');
// const shortid = require('shortid');

const run = () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App running on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};
run();

// const webSocketServer = new ws.Server({ server });

// const rooms = {};
// let roomNum = 1;

// webSocketServer.on('connection', (socket) => {
//   const roomID = shortid();
//   socket.send(JSON.stringify({ roomID, roomNum }));
//   rooms[roomNum] = roomID;
//   roomNum++;

// const leave = room => {
//   // not present: do nothing
//   if(! rooms[room][roomID]) return;

//   // if the one exiting is the last one, destroy the room
//   if(Object.keys(rooms[room]).length === 1) delete rooms[room];
//   // otherwise simply leave the room
//   else delete rooms[room][uuid];
// };

// socket.on("message", data => {
//   const { message, meta, room } = data;

//   if(meta === "join") {
//     if(! rooms[room]) rooms[room] = {}; // create the room
//     if(! rooms[room][uuid]) rooms[room][uuid] = socket; // join the room
//   }
//   else if(meta === "leave") {
//     leave(room);
//   }
//   else if(! meta) {
//     // send the message to all in the room
//     Object.entries(rooms[room]).forEach(([, sock]) => sock.send({ message }));
//   }
// });

// socket.on("close", () => {
//   // for each room, remove the closed socket
//   Object.keys(rooms).forEach(room => leave(room));
// });
// });
