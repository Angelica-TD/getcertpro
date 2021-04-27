const e = require("express")

module.exports = function paginate(data, advertised, currentPage){
    let limit = 9
    let start = (currentPage-1) * (limit-advertised)//0-6
    let end = currentPage * (limit-advertised)//6-12
    const results = {}
    if(end < data.length){
        results.next = {
        page: currentPage + 1,
        limit: limit
        }
    }
    
    if(start > 0){
        results.previous = {
        page: currentPage - 1,
        limit: limit
        }
    }
    
    results.results = data.slice(start, end)
    return results
}