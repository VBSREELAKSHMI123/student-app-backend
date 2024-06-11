const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,require:true},
        "rollno":{type:String,require:true},
        "admno":{type:String,require:true},
        "college":{type:String,require:true}
    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}