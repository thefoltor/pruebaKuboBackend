const MovieModel = require('../models/movie');

exports.getMovies = async (req,res,next)=>{
    try{
        const result = await MovieModel.findAll();
        if(result){
            res.json({code:100, data:[...result]});
        }
        else{
            res.json({code:102});    
        }
    }catch(e){
        res.json({code:102});
    }
}

exports.addMovie = async (req, res, next)=>{
    try{
    const image = req.body.image;
    const title = req.body.title;
    const description = req.body.description;
    const duration = req.body.duration;
    const categories = req.body.categories;
    const youtube = req.body.youtube;
    const date = req.body.date;
    const cover = req.body.cover;
    const rate = req.body.rate;

    const result = await MovieModel.create({image:image,title:title,description:description,
        duration:duration,categories:categories,youtube:youtube,date:date,cover:cover,rate:rate});

    if(result){
        res.json({code:100, data:result});
    } else {
        res.json({code:102})
    }
    }
    catch(e){
        res.json({code:102})
        console.log (e);
    }

}
