const fs = require('fs')
const shuffle = require('./shuffle.js')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)


let filter = function(filterby){
    let filteredContent = []
    
    for(let cert in contentData.allcerts){
		if (contentData.allcerts[cert].category.includes(filterby)){
			filteredContent = filteredContent.concat(contentData.allcerts[cert])
		}
	}
    return filteredContent = new shuffle(filteredContent).shuffle()
}

module.exports = filter