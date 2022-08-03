let mongoose = require('mongoose');
const express = require("express");
let app = express();
const bcrypt = require('bcrypt')
let bodyParser = require("body-parser");
app.use(bodyParser.json())
require('dotenv').config()

let User = require('./greekSchema')
let Greek = require('./greekMSchema')
const Cryptr = require("cryptr")
const cors = require('cors');

app.use(
    cors({
        origin: "http://localhost:3001",
        credentials: true
    })
)

mongoose.connect(process.env.DB)

app.post('/create', (req, res) =>{
    let JSONData = req.body;

    if(JSONData['password'] != JSONData['cPassword']){
        res.end("Password Doesn't match")
    }else{
        bcrypt.hash(JSONData['password'], 10, (err, hash) =>{
            if(err){
                res.end(err)
            }else{
                let securePass = hash;
                cryptr = new Cryptr(process.env.DEEP_KEY)
                let fName = cryptr.encrypt(JSONData['fName'])

                let finalUserDetails = new User({
                    fName : fName,
                    email: JSONData['email'],
                    password : securePass,
                })
                finalUserDetails.save()
                .then(result =>{
                    res.json(result)
                })
                .catch(err =>{
                    res.json(err)
                })
            }
        })
    }
})

app.post('/login', async (req, res)=>{
    let JSONData = req.body
    let email = JSONData['email'];
    let rPassword = JSONData['password'];

    let user = await User.findOne({email: email})
    if(user){
        let fName = user.fName;
        let pass = user.password;
        let status = user.status;
        let userId = user.id;
        let auth = await bcrypt.compare(rPassword, pass);
        if(auth == true){
            if(status === 0){
                console.log("Not Authorized")
            }else{
                cryptr = new Cryptr(process.env.DEEP_KEY)
                let id = cryptr.encrypt(userId)
                let fNameData = cryptr.decrypt(fName)
                res.send({fNameData, status})
            }
        }else{
            console.log("Wrong pass")
        }
    } else{
        console.log("User not found")
    }
})

app.post('/send', async (req, res)=>{
    let Greek = require('./greekMSchema')

    let cryptr = new Cryptr(process.env.DEEP_KEY);
    let JSONData = req.body

    let message = cryptr.encrypt(JSONData['message']);
    let greekId = JSONData['id'];

    let user = await User.findOne({_id : greekId})
    if(user){
        let greekName = user.fName;

    let finalGreek = new Greek({
        message : message,
        greekName: greekName,
        greekId : greekId
    })

    finalGreek.save()
    .then(result =>{
        console.log(result)
    })
    .catch(e=>{res.json(e)})
    }
})

app.post('/chat', async (req, res)=>{  
    let greeks = await Greek.find()
    let id = req.body.id
    
    if(greeks){
        greeks.forEach((greek) =>{
            let cryptr = new Cryptr(process.env.DEEP_KEY);
            
            if(greek['greekId'] === cryptr.decrypt(id)){
                console.log(cryptr.decrypt(greek['message']))
            }else{
                console.log("2nd person")
            }
        })
    } else{
        res.send("not found");
    
    }
})

let port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("Listening......")
})
