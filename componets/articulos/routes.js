const express = require('express')
const {getArticle, addArticle} = require('./controller')
const router = express.Router()


router.get('/',function (req, res) {
    getArticle()
        .then((fullArticle) => {
            res.status(200).send({error:'',body : fullArticle})
        })
        .catch (e =>{
            res.status(500).send({error :'Unexpected Error', body : ''})
        })
    })

router.post('/', function (req, res) {
    addArticle(req.body.user, req.body.nameArticle)
        .then((fullArticle) =>{
            res.status(201).send({error:'',body : fullArticle})
        })
        .catch( e =>{
            res.status(400).send({error :'Informacion invalida', body : ''})
        })
})

module.exports = router