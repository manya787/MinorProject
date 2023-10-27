const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoute = require('../routes/User')
const examQuestionsRoute = require('../routes/ExamQuestions')
const userExamsRoute = require('../routes/UserExams')
const examRoute = require('../routes/Exam')
// require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

    const URI = 'mongodb+srv://manyagarg787:minor@cluster0.qzeqzr2.mongodb.net/quiz?retryWrites=true&w=majority';
    mongoose.connect(URI).then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})

app.use('/users', userRoute)
app.use('/examquestions', examQuestionsRoute)
app.use('/exam', examRoute)
app.use('/userexams', userExamsRoute)

app.listen(5000, () => {
    console.log('Server started on 5000')
})