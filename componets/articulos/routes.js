const express = require('express')
const {getArticle, addArticle, updateArticle, deleteArticle} = require('./controller')
const router = express.Router()


router.get('/',function (req, res) {
    const filterArticle = req.query.nameArticle || null

    getArticle(filterArticle)
        .then((fullArticle) => {
            console.log('lista obtenida correctamente')
            res.status(200).send({error:'',body : fullArticle})
        })
        .catch (e =>{
            console.log(e)
            res.status(500).send({error :'Unexpected Error', body : ''})
        })
    })

router.post('/', function (req, res) {
    addArticle(req.body.user, req.body.nameArticle)
        .then((fullArticle) =>{
            console.log('add article successfull')
            res.status(201).send({error:'',body : fullArticle})
        })
        .catch( e =>{
            console.log(e)
            res.status(400).send({error :'Informacion invalida', body : ''})
        })
})

router.patch('/:id', function (req, res) {
    updateArticle(req.params.id, req.body.nameArticle)
        .then((data) =>{
            console.log('add article successfull')
            res.status(200).send({error:'',body : data})
        })
        .catch( e =>{
            console.log(e)
            res.status(500).send({error :'Unexpected Error', body : ''})
        })
})

router.delete('/:id', function (req, res){
    deleteArticle(req.params.id)
        .then(() => {
            console.log('data eliminada')
            res.status(200).send({error:'',body : `id ${req.params.id} ha sido eliminada`})
        })
        .catch( e =>{
            console.log(e)
            res.status(500).send({error :'Unexpected Error', body : ''})
        })
})

module.exports = router