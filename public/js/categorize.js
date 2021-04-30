const fs = require('fs')
const shuffle = require('./shuffle.js')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)

module.exports = function categorize(cat){
    let categorized = {}
    categorized.results = []
    categorized.adLength = 0
    for(let cert in contentData.allcerts){
        if(!contentData.allcerts[cert].other.includes('ad')){
            if (contentData.allcerts[cert].category.includes(cat)){
                categorized.results = categorized.results.concat(contentData.allcerts[cert])
            }
        }
        else if(contentData.allcerts[cert].category.includes(cat)){
            categorized.adLength+=1
        }
        
    }
    categorized.results = new shuffle(categorized.results).shuffle()
    return categorized
}