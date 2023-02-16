const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const userRouter = require('./config/userRouter')
const aboutRouter = require('./config/aboutRouter')
const projectRouter = require('./config/projectsRouter')
const educationRouter = require('./config/educationRouter')
const experiencesRouter = require('./config/experiencesRouter')
const mainTitleRouter = require('./config/mainTitleRouter')
const mailRouter = require('./config/mailRouter')
const passwordsRouter = require('./config/passwordsRouter')
const linkRouter = require('./config/linkRouter')

require('dotenv').config()
require('./model/mongoose')

app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({origin: '*',
              methods:[ "GET", "POST", "DELETE", "PUT"]}))

app.use(userRouter)
app.use(aboutRouter)
app.use(projectRouter)
app.use(educationRouter)
app.use(experiencesRouter)
app.use(mainTitleRouter)
app.use(mailRouter)
app.use(passwordsRouter)
app.use(linkRouter)

// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
    
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

const port = process.env.PORT || 8000

app.listen(port)


