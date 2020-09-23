const store = require('./store')

function getArticle () {
    return new Promise ((resolve, reject) =>{
        resolve(store.get())
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
        console.log(fullArticle)
    })
}


module.exports = {
    getArticle,
    addArticle
}