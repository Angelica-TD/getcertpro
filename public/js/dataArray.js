const fs = require('fs')
let rawData = fs.readFileSync('./data.json')
let contentData = JSON.parse(rawData)

let dataArray = []
for(let item of contentData.allcerts){
    if(!item.other.includes('new')){
        dataArray = dataArray.concat(item)
    }
}
module.exports = dataArray