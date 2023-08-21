const exp= require('express')
const router= exp.Router()
const func=require('./controller/index')


let routes=(app)=>
{
    router.post('/saveinfo',func.savedata)
    router.post('/year',func.schema1)
    router.post('/minutes',func.schema2)
    router.post('/genres',func.schema3)
    router.post('/director',func.schema4)
    router.post('/rated',func.schema5)
    router.post('/imdb',func.schema6)
    router.post('/rating',func.schema7)
    router.post('/tomatose',func.schema8)
    router.post('/awards',func.schema9)
    app.use('/api',router)
}

module.exports=
routes