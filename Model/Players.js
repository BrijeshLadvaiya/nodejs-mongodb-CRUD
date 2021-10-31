
const mongoose=require('mongoose');//exported from seperate file.


const PlayerSchema=new mongoose.Schema({
    PlayerId:{
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

const tblPlayerInfo=mongoose.model('tblPlayerInfo',PlayerSchema);

// async function insertPlayer(PlayerId_,fname_,lname_,role_){
//     const PlayerObject=new tblPlayerInfo({
//         playerId:playerId_,
//         fname:fname_,
//         lname:lname_,
//         role:role_
//     });

//     result= await PlayerObject.save();
//     return result;
// }

module.exports=tblPlayerInfo;
