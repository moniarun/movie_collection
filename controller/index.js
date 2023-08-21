const service= require('./service')

const savedata = async(req,res)=>{
    
        const saveuser= await service.savein(req.body)
        res.send('stored successfully')
     
}

const schema1= async(req,res)=>{
    const get= await service.year(req.body)
    res.send(get)
}

const schema2 =async(req,res)=>
{
    const getdetails= await service.minutes(req.body)
    res.send(getdetails)
}
const schema3 =async(req,res)=>
{
    const getdetails= await service.genres(req.body)
    res.send(getdetails)
}

const schema4 =async(req,res)=>
{
    const getdetails= await service.directors(req.body)
    res.send(getdetails)
}

const schema5 =async(req,res)=>
{
    const getdetails= await service.rated(req.body)
    res.send(getdetails)
}

const schema6 =async(req,res)=>
{
    const getdetails= await service.imdb(req.body)
    res.send(getdetails)
}

const schema7 =async(req,res)=>
{
    const getdetails= await service.rating(req.body)
    res.send(getdetails)
}

const schema8 =async(req,res)=>
{
    const getdetails= await service.tomatoes(req.body)
    res.send(getdetails)
}

const schema9 =async(req,res)=>
{
    const getdetails= await service.awards(req.body)
    res.send(getdetails)
}
module.exports=
{
    savedata,
    schema1,
    schema2,
    schema3,
    schema4,
    schema5,
    schema6,
    schema7,
    schema8,
    schema9
}