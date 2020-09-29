const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const router = require('./componets/articulos/routes')

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use('/articles', router)




//app.use('/app', express.static('public'))
const main = async() => {
    await app.listen(3005)
    console.log('app escuchando en http://localhost:3005')
}

main()