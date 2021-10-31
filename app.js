const express =require('express');
const {connection,mongoose}=require('./Database/Connection.js');//exported from seperate file.
const tblCoachInfo=require('./Model/Coaches.js');
const tblPlayerInfo=require('./Model/Players.js');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 3000;

//Home Route
app.get("/",(req,res)=>{
    res.send("<h1>Hello There! </h1>")
})

// Route to create db.
app.get("/db-create", (req,res)=>{
   

    connection
    .then(()=>console.log("Mongodb Connected and Created database dbBCCI"))
    .catch(err=>console.error("Could not connect to Mongodb.",err));
    res.send("<h1>Database Using Route.</h1>");

    
});


//Route to create Table.
app.get("/db-create-table", (req,res)=>{


    try {
        var result=tblPlayerInfo
        console.log("PlayerInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table PlayerInfo",err)
    }

    try {
        var result=tblCoachInfo
        console.log("CoachInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table CoachInfo",err)
    }

    
    res.send("<h1>Route to create table </h1>")
});

//Route to insert Data.
app.get("/db-insert",(req,res)=>{

    tblPlayerInfo.insertMany([{
        PlayerId:'03',
        fname:'Suresh',
        lname:'Raina',
        role:'Bat/Bowl'
    },{
        PlayerId:'18',
        fname:'Virat',
        lname:'Kohli',
        role:'Bat/C'
    },{
        PlayerId:'44',
        fname:'Rishabh',
        lname:'Pant',
        role:'Bat/WK'
    },{
        PlayerId:'09',
        fname:'Jasprit',
        lname:'Bumrah',
        role:'Bowl'
    },{
        PlayerId:'08',
        fname:'Ravindra',
        lname:'Jadeja',
        role:'Bat/Bowl'
    }],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted\n",JSON.stringify(data));
    });

    tblCoachInfo.insertMany([{
        CoachId:'07',
        fname:'MahendraSinh',
        lname:'Dhoni',
        role:'Mentor'
    },{
        CoachId:'04',
        fname:'Ravi',
        lname:'Sastri',
        role:'Head Coach'
    }
    ],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted\n",JSON.stringify(data));
    })

    res.send("<h1>Route to insert Data. </h1>")
});

//Route to update Data.
app.get("/db-update",(req,res)=>{
    
    tblPlayerInfo.updateMany({playerId:03},{$set:{fname:'Ajinkya', lname:'Rahane'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in PlayerInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    tblCoachInfo.updateMany({coachId:04},{$set:{fname:'Anil', lname:'Kumble'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in CoachInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    res.send("<h1>Route to update Data. </h1>")
})

//Route to display data
app.get("/db-display", (req,res)=>{
    tblPlayerInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in PlayerInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    tblCoachInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in CoachInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route to display Data. </h1>")
});

//Route to Delete Data
app.get("/db-delete",(req,res)=>{
    
    tblPlayerInfo.deleteOne({studentId:"08"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    tblCoachInfo.deleteOne({studentId:"04"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route to Delete Data </h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`)
})