const fs = require('fs')
const shuffle = require('./shuffle.js')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)

let advertised = []
for(let item of contentData.allcerts){
    if(item.other.includes('new')){
        advertised = advertised.concat(item)
    }
}

module.exports = advertised