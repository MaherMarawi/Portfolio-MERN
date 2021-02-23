

const mongoose = require('mongoose')

const db = process.env.Db_URL


mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))