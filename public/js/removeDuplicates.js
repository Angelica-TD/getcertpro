const fs = require('fs')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)
//creata an array of all categories and remove duplicates
let cat = []
let noDupes = []
	for(let cert in contentData.allcerts){
		cat = cat.concat(contentData.allcerts[cert].category)
		if(!noDupes.includes(cat)){
			noDupes = [...noDupes, cat]
		}
	}
	// console.log(cat)
function removeDuplicates(data){
	return [...new Set(data)]
}
noDupes = removeDuplicates(cat)

module.exports = noDupes