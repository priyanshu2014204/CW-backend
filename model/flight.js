const mongoose=require("mongoose");

const schemma=mongoose.Schema({
    takeof: {
    type: 'String',
    required: true,
    default: "6:55 am"
},
    landing: {
        type: String,
        required: true,
        default: "9:50 am"
    },
    airline: {
        type: String,
        required: true,
        default: "Indigo"
    },
    cost:{
        type: Number,
        required: true,
        default: "207"
    },
    

})

const Flightsche=mongoose.model("flight",schemma)

module.exports={
    Flightsche
}