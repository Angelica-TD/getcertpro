const fs = require('fs')
const shuffle = require('./shuffle.js')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)

module.exports = function categorize(cat){
    let categorized = []
    for(let cert in contentData.allcerts){
        if(!contentData.allcerts[cert].other.includes('ad')){
            if (contentData.allcerts[cert].category.includes(cat)){
            categorized = categorized.concat(contentData.allcerts[cert])
            }
        }
        
    }
    categorized = new shuffle(categorized).shuffle()
    return categorized
}