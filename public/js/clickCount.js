const fs = require('fs')
let links = document.querySelectorAll(".clickCount")
let counter = 0


for(let item of links){
    item.addEventListener('click', ()=>{
        counter++
        fs.appendFile('samplefile.txt', counter, (e)=>{
            if (err) throw err;
        })
    })
}


