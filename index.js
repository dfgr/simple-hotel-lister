const express = require("express")
const app = express()
const Datastore = require('nedb')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(express.static('public'))
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
db = new Datastore("hotels.db");
db.loadDatabase()

app.post("/api/addHotel",(req,res) => {
    db.find({ }, (err, docs) => {
        console.log(req.body) 
        let hotelNumber = docs.length + 1
        db.insert({"number": hotelNumber,  name:req.body.hotelName,"url":req.body.locationUrl,"distanceToSea":req.body.distanceToSea,"price":req.body.price,"familyCount":req.body.distanceToSea,"imageUrls":req.body.images})
        res.json({type: "successful",number: hotelNumber}).status(200)
    });
})
app.get("/api/get",(req,res)=>{
    db.find({ }, (err, docs) => {
        res.json(docs)
    })
})
app.get("/",(req, res)=>{
    db.find({ }, (err, docs) => {
        res.render("main",{docs:docs})
    })
})
app.listen(port, ()=>{
    console.log("Server Running On "+port)
})