let mongoose = require('mongoose');
const express = require("express");
let app = express();
const bcrypt = require('bcrypt')
let bodyParser = require("body-parser");
app.use(bodyParser.json())
require('dotenv').config()

let User = require('./greekSchema')
const Cryptr = require("cryptr")
const cors = require('cors');

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

mongoose.connect(process.env.DB)
app.post('/create', (req, res) =>{
    let JSONData = req.body;

    cryptr = new Cryptr(process.env.DEEP_KEY)
    let fName = cryptr.encrypt(JSONData['fName'])

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
app.listen(8080, ()=>{
    console.log("Listening......")
})