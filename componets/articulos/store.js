const db = require('mongoose')
const article = require('./model')
const uri = 'mongodb+srv://db_user_alejo:alejo1234@cluster0.eykkr.mongodb.net/test?retryWrites=true&w=majority'

db.Promise = global.Promise

db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('[db] conectada con exito'))
    .catch((e) => console.error(`[db], ${e}`))


    function addArticle(nameArticle) {
        const myArticle = new article(nameArticle)
        myArticle.save()
        //list.push(nameArticle)
    }
    
    async function getArticles(filtered) {
        let filter = {}
        if(filtered !== null){
            filter = {nameArticle: filtered}
        }
        const articles = await article.find(filter)
        return articles
    }
    
    async function updateArticle(id,nameArticle){
        console.log(nameArticle)
        const foundArticle = await article.findOne({id})
        foundArticle.nameArticle = nameArticle
        const newArticle = await foundArticle.save()
        return newArticle
    }

    function removeArticle(id) {
        return article.deleteOne({id})
    }

    module.exports = {
        add: addArticle,
        get: getArticles,
        update: updateArticle,
        remove: removeArticle
    }