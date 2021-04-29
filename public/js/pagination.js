module.exports = function paginate(data, advertised, currentPage){
    let limit = 9
    let start = (currentPage-1) * (limit-advertised)//0-6-12
    let end = currentPage * (limit-advertised)//6-12-18
    const results = {}
    results.fullLength = data.length
    results.next = {
        page: currentPage + 1,
        visible: true
        }
    results.previous = {
        page: currentPage - 1,
        visible: true
    }
    if(currentPage===1){
        // previous icon = false
        results.previous.visible=false
    }

    if(currentPage>(data.length/limit)+1){
        results.next.visible=false
    }

    
    results.results = data.slice(start, end)
    return results
}