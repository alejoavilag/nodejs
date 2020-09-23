const store = require('./store')

function getArticle (filter) {
    return new Promise ((resolve, reject) =>{
        resolve(store.get(filter))
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

function updateArticle (id, nameArticle) {
    return new Promise(async(resolve, reject) =>{
        if(!id || !nameArticle){
            console.error('[messageControler] data invalida ')
           reject('Datos incorrectos')
           return false
        }
        const result = await store.update(id, nameArticle)
        resolve(result)
    })
}

function deleteArticle(id){
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Id no valido')
            return false
        }
        store.remove(id)
            .then(() =>{
                resolve()
            })
            .catch(() =>{
                reject(e)
            })
    })
}

module.exports = {
    getArticle,
    addArticle,
    updateArticle,
    deleteArticle
}