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
