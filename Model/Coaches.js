const mongoose=require('mongoose');//exported from seperate file.


const CoachSchema=new mongoose.Schema({
    CoachId:{
        type:String,
        require:true,
        unique:true
    },
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true,
        maxlength:10
    }
});

const tblCoachInfo=mongoose.model('tblCoachInfo',CoachSchema);

module.exports=tblCoachInfo;