const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/User");
const examQuestionsRoute = require("./routes/ExamQuestions");
const userExamsRoute = require("./routes/UserExams");
const examRoute = require("./routes/Exam");
const connectToDatabase = require("./db/conn");
const cookieParser = require("cookie-parser");

dotenv.config();
dotenv.config({ path: "/.env" });

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Call the connectToDatabase function to connect to the database
connectToDatabase();

app.use("/users", userRoute);
app.use("/examquestions", examQuestionsRoute);
app.use("/exam", examRoute);
app.use("/userexams", userExamsRoute);

require("./db/conn");

app.use(express.json());

// we link router files to make route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.get("/signin", (req, res) => {
  res.send(`Hello`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});


// const dotenv = require("dotenv");
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const userR = require('./routes/User');
// const examQuestionsRoute = require('./routes/ExamQuestions');
// const userExamsRoute = require('./routes/UserExams');
// const examRoute = require('./routes/Exam');
// const userRoute = require('./routes/userRoute');
// const chatRoute = require('./routes/chatRoute');
// const messageRoute = require('./routes/messageRoute'); 
// const { Server } = require('socket.io');
// const { errorHandler, notFound } = require('./middleware/error.js');
// const connectToDatabase = require("./db/conn");


// dotenv.config();
// dotenv.config({ path: "/.env" });

// app.use(cors());
// app.use(bodyParser.json());

// connectToDatabase();

// app.use('/users', userR);
// app.use('/examquestions', examQuestionsRoute);
// app.use('/exam', examRoute);
// app.use('/userexams', userExamsRoute);

// app.use('/user', userRoute);
// app.use('/chat', chatRoute);
// app.use('/message', messageRoute);

// require("./db/conn");

// app.use(express.json());

// // we link router files to make route easy
// app.use(require("./router/auth"));

// const PORT = process.env.PORT;

// app.get("/signin", (req, res) => {
//   res.send(`Hello`);
// });

// app.get("/signup", (req, res) => {
//   res.send(`Hello`);
// });

// const httpServer = app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
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