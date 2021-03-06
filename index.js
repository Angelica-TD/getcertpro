const express = require('express')
const app = express()
const path = require('path')
const contentData = require('./data.json')
const ejsMate = require('ejs-mate')
const shuffle = require('./public/js/shuffle')
let noDupes = require('./public/js/removeDuplicates')
const categorize = require('./public/js/categorize')
const data = require('./public/js/dataArray')
const advertised = require('./public/js/advertised')
let description = ""
const pagination = require('./public/js/pagination')
let dataArray = new shuffle(data).shuffle()

//--------SET VIEW ENGINE-------------
app.engine('ejs', ejsMate)
//to set the view engine to ejs
app.set("view engine", "ejs")
//--------SET VIEW PATH--------------------
app.set("views", path.join(__dirname, '/views'))
//--------SERVE STATIC PAGES----------
app.use(express.static(path.join(__dirname, '/public')))
//to be able to read key value pairs passed by the request body
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//--------ROUTES--------------------
//home page route
app.get('/', (req, res)=>{
	let title = "Find the right certification - GetCertPro"
	dataArray = new shuffle(data).shuffle()
	description = "Searching for certifications does not have to be hard, find the right certification for you in a couple of clicks. We have included certifications you need in Networking, Cybersecurity, Cloud Services, Cloud Infrastructure, IT Service Management, Project Management and much more."
	// console.log(noDupes)
	res.render("index", {...contentData, noDupes, title, description})
})
//=======================================================
//when user clicks certifications in navbar renders all certs (certifications.ejs)
//shuffled results
app.get('/allcertifications', (req, res)=>{
	let queryPage = parseInt(req.query.page)
	let title = "All Certifications - GetCertPro"
	//render all certs
	let paged = pagination(dataArray, advertised.length, queryPage)
	description = `All certifications`
	queryPage +=1
	// res.send(paged)
	res.render('certifications', {paged, noDupes, title, description, advertised, queryPage})
	
})
//==================================================================
//when user hovers over certifications in navbar
//and clicks on one of the categories
//shuffled results
app.get('/categories/:cat', (req,res)=>{
	let queryPage = parseInt(req.query.page)
	let paged
	const {cat} = req.params
	let title = `${cat} - GetCertPro`
	description =`Find all certifications for ${cat}`
	if(noDupes.includes(cat)){
		let categorized =  categorize(cat)
		paged = pagination(categorized.results, categorized.adLength, queryPage)
		// console.log(paged.next)
		// console.log(categorized.adLength)
		res.render('category', {noDupes, cat, paged, title, description, advertised})
	}
	else{
		res.send("Not Found")
	}
	
})

app.get('/contact', (req,res)=>{
	let title = `Contact - GetCertPro`
	res.render('contact', {title, noDupes, description})
})

app.get('/sitemap', (req,res)=>{
	let title = `Sitemap - GetCertPro`
	res.render('sitemap', {title, noDupes})
})

//==================================================================
//================TEST======================
app.get('/test', (req, res)=>{
	let myArray = []
	for(let item of contentData.allcerts){
		myArray = myArray.concat(item)
	}
	console.log(myArray)
})
//=================================================================
app.listen(80)