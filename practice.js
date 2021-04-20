const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const path = require('path')
const contentData = require('./allcerts.json')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, '/views'))

//to be able to read key value pairs passed by the request body
//any form data gets parsed
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

// GET /allcerts - list all certifications
// POST /allcerts - create a new certification
// GET /allcerts/:id - get one cert using id meaning all certs need to have a unique id created
// PATCH /allcerts/:id - update one cert using id
// DELETE /allcerts/:id - delete one cert using id


//READ ALL CERTS
app.get("/allcerts",(request, response)=>{
    response.render('test', contentData)
})

//CREATE A NEW CERT
//create route to display form to create a new cert
// /allcerts/new
app.get('/allcerts/new', (request, response)=>{
    response.render('createform')
})
//MAKE POST ROUTE WHERE DATA WILL BE SENT TO
app.post('/allcerts', (request, response)=>{
    const {title, description} = request.body
    // contentData.push({title, description})
    response.send('IT workd')
})











app.listen(3000, ()=>{
	console.log('listening')
})