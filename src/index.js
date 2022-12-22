const express = require('express')
const dbConnect = require('./config/db')
const cors = require('cors');
const questionRouter = require('./routes/questionRouter.routes');
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => res.send('hello'))

app.use("/question",questionRouter)





app.listen(PORT, async() => {
    await dbConnect();
    console.log('server started on port http://localhost:8080')}
)