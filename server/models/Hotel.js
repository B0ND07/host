const mongoose=require("mongoose")

const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,

    },  
    city: {
        type: String,
   
      },
      address: {
        type: String,
        
      },
      distance: {
        type: String,
       
      },
      photos: {
        type: [String],
      },
      rooms: {
        type: [String],
      },
    

})

const Hotel=mongoose.model("Hotels",hotelSchema)

module.exports=Hotel