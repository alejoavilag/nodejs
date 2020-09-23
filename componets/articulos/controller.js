const store = require('./store')

function getArticle () {
    return new Promise ((resolve, reject) =>{
        resolve(store.list())
    })
}
function addArticle (user, nameArticle) {
    return new Promise((resolve, reject) =>{
        if(!user || !nameArticle){
            console.error('[messageControler] campos vacios ')
           reject('Datos incorrectos')
           return false
        }
        const fullArticle ={
            user,
            nameArticle,
            date : new Date()
        }
        store.add(fullArticle)
        resolve(fullArticle)
    })
}


module.exports = {
    getArticle,
    addArticle
}