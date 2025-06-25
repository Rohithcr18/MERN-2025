const mongoose = require('mongoose')
const LINK = process.env.MONGOLINK
const connetDB = async ()=>{
    try{
        await mongoose.connect(LINK);
        console.log("successfully connected")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connetDB