// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// import userRoute from './routes/User.js';
// const examQuestionsRoute = require('./routes/ExamQuestions.js');
// const userExamsRoute = require('./routes/UserExams.js');
// const examRoute = require('./routes/Exam.js');
// import cuserRoute from "./routes/userRoute.js";
// import chatRoute from "./routes/chatRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// import { Server } from "socket.io";
// import { errorHandler, notFound } from "./middleware/chaterror.js";
// const connectToDatabase = require("./db/conn.js"); // Import the connectToDatabase function

// // import dotenv from "dotenv";
// // import express from 'express';
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // import userRoute from './routes/User.js';
// // import examQuestionsRoute  from './routes/ExamQuestions.js';
// // import userExamsRoute from './routes/UserExams.js';
// // import examRoute from './routes/Exam.js';
// // import cuserRoute from "./routes/userRoute.js";
// // import chatRoute from "./routes/chatRoute.js";
// // import messageRoute from "./routes/messageRoute.js";
// // import { Server } from "socket.io";
// // import { errorHandler, notFound } from "./middleware/chaterror.js";
// // //import connectToDatabase from "./db/conn.js"; // Import the connectToDatabase function
// // const connectToDatabase = require("./db/conn.js"); // Import the connectToDatabase function

// dotenv.config();
// dotenv.config({ path: "/.env" });


// app.use(cors());
// app.use(bodyParser.json());

// app.use(express.json());
// require("./db/conn.js");

// // Call the connectToDatabase function to connect to the database
// connectToDatabase();

// app.use('/users', userRoute );
// app.use('/examquestions', examQuestionsRoute);
// app.use('/exam', examRoute);
// app.use('/userexams', userExamsRoute);


// // we link router files to make route easy
// app.use(require("./router/auth.js"));

// const PORT = process.env.PORT;

// app.get("/signin", (req, res) => {
//   res.send(`Hello`);
// });

// app.get("/signup", (req, res) => {
//   res.send(`Hello`);
// });


// //Chat part

// app.use("/user", cuserRoute);
// app.use("/chat", chatRoute);
// app.use("/message", messageRoute);

// const httpServer = app.listen(PORT, () => {
//   console.log(`App is running on the Port ${PORT}`);
// });

// const io = new Server(httpServer, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "*",
//     credentials: true,
//   },
// });

// const emailToSocketMapping = new Map();
// const socketToEmailMapping = new Map();

// io.on("connection", (socket) => {
//   console.log("Connected to socket.io");
//   socket.on("setup", (userData) => {
//     socket.join(userData._id);
//     socket.emit("connected");
//   },

//   );

//   socket.on("join chat", (room) => {
//     socket.join(room);
//     console.log("User Joined Room: " + room);
//   });

//   // socket.on("group created", (room) => socket.in(room).emit("group created"));
//   socket.on("typing", (room) => socket.in(room).emit("typing"));
//   socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

//   socket.on("new message", (newMessageRecieved) => {
//     var chat = newMessageRecieved.chat;

//     if (!chat.users) return console.log("chat.users not defined");

//     chat.users.forEach((user) => {
//       if (user._id == newMessageRecieved.sender._id) return;

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });

//   socket.off("setup", () => {
//     console.log("USER DISCONNECTED");
//     socket.leave(userData._id);
//   });

//   socket.on("join-room", (data) => {
//     const { roomId, emailId } = data;
//     console.log(emailId, roomId);

//     emailToSocketMapping.set(emailId, socket.id);
//     socketToEmailMapping.set(socket.id, emailId);
//     socket.join(roomId);
//     socket.emit("joined-room", {
//       roomId,
//     });
//     socket.broadcast.to(roomId).emit("user-joined", { emailId });
//   });

//   socket.on("call-user", (data) => {
//     const { emailId, offer } = data;
//     const socketId = emailToSocketMapping.get(emailId);
//     const fromEmail = socketToEmailMapping.get(socket.id);
//     socket.to(socketId).emit("incoming-call", {
//       from: fromEmail,
//       offer,
//     });
//   });

//   socket.on("call-accepted", (data) => {
//     const { emailId, ans } = data;
//     const socketId = emailToSocketMapping.get(emailId);

//     socket.to(socketId).emit("call-accepted", { ans });
//   });
// });




// //calling Port 
// app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
// });



const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDatabase = require("./db/conn");
const { Server } = require("socket.io");
const http = require("http");

dotenv.config();
dotenv.config({ path: "/.env" });

app.use(cors());
app.use(bodyParser.json());

// Call the connectToDatabase function to connect to the database
connectToDatabase();

// Routes from File 1
const userRoute = require("./routes/User");
const examQuestionsRoute = require("./routes/ExamQuestions");
const userExamsRoute = require("./routes/UserExams");
const examRoute = require("./routes/Exam");

app.use("/users", userRoute);
app.use("/examquestions", examQuestionsRoute);
app.use("/exam", examRoute);
app.use("/userexams", userExamsRoute);

require("./db/conn");

app.use(express.json());

app.get("/signin", (req, res) => {
  res.send(`Hello`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello`);
});

const PORT = process.env.PORT || 5000; // Choose the appropriate port

const server = http.createServer(app);
const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });

  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log(emailId, roomId);

    emailToSocketMapping.set(emailId, socket.id);
    socketToEmailMapping.set(socket.id, emailId);
    socket.join(roomId);
    socket.emit("joined-room", {
      roomId,
    });
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });

  socket.on("call-user", (data) => {
    const { emailId, offer } = data;
    const socketId = emailToSocketMapping.get(emailId);
    const fromEmail = socketToEmailMapping.get(socket.id);
    socket.to(socketId).emit("incoming-call", {
      from: fromEmail,
      offer,
    });
  });

  socket.on("call-accepted", (data) => {
    const { emailId, ans } = data;
    const socketId = emailToSocketMapping.get(emailId);

    socket.to(socketId).emit("call-accepted", { ans });
  });

  socket.on("disconnect", () => {
    const emailId = socketToEmailMapping.get(socket.id);
    socketToEmailMapping.delete(socket.id);
    emailToSocketMapping.delete(emailId);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
