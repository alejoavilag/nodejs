const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    user: String,
    nameArticle: {
        type:String,
        required: true
    },
    date: Date
})

const article = mongoose.model('articles', mySchema)

module.exports = article