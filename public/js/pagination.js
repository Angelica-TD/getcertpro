module.exports = function paginate(data, advertised){
    let maxItems = 9 - advertised
    let start = 0
    let end = start + maxItems
    let paginatedItems = data.slice(start, end)
    return paginatedItems
}