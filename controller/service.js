const db= require('mongoose')
const userschema= new db.Schema(
    {
    plot: String,
    genres: String,
    runtime: String,
    cast: String,
    poster: String,
    title: String,
    fullplot: String,
    languages: String,
    released: String,
    directors: String,
    rated: String,
    awards: {
        wins: String,
        nominations: String,
        text: String
    },
    lastupdated:String,
    year: String,
    imdb: {
        rating: String,
        votes: String,
        id: String
    },
    countries: [String],
    type: String,
    tomatoes: {
        viewer: {
            rating: String,
            numReviews:String,
            meter:String
        },
        fresh: String,
        critic: {
            rating:String,
            numReviews:String,
            meter: String
        },
        rotten: String,
        lastUpdated: String
    }
}

)
const collect= db.model('fileupload',userschema)

const savein= async(data)=>{ 
    const info= new collect(data)
    const saveuser= await info.save()
    return saveuser
}

const year = async(data)=>
{
    const getdetails = await collect.findOne({year:data.year})
    return getdetails
}


const  minutes= async(data)=>
{
    const get= await collect.findOne({runtime:{$gte:120}})
    return get
}

const   genres = async(data)=>
{
    const get= await collect.findOne({genres:data.genres})
    return get
}

const  directors = async(data)=>
{
    const get= await collect.findOne({directors:data.directors})
    return get
}

const  rated = async(data)=>
{
    const get= await collect.findOne({rated:data.rated})
    return get
}

const  imdb = async(data)=>
{
    const get= await collect.findOne({"imdb.votes":{$gte:1000}})
    return get
}

const  rating = async(data)=>
{
    const get= await collect.findOne({"imbd.rating":{$gte:7.9}})
    return get
}

const  tomatoes = async(data)=>
{
    const get= await collect.findOne({"tomatoes.viewers.rating":{$gte:4.4}})
    return get
}

const  awards = async(data)=>
{
    const get= await collect.findOne({"awards.wins":{$gte:3}})
    return get
}


module.exports=

{
    savein,
    year,
    minutes,
    genres,
    directors,
    rated,
    imdb,
    rating,
    tomatoes,
    awards
}