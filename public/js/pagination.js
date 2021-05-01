module.exports = function paginate(data, advertised, currentPage){
    let limit = 9
    let start = (currentPage-1) * (limit-advertised)//0-9-18
    let end = currentPage * (limit-advertised)//9-18-27
    const results = {}
    results.fullLength = data.length + advertised
    results.noAdLength = data.length
    results.next = {
        current: currentPage,
        count: Math.ceil(results.fullLength/limit),
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

    if(currentPage>=(results.fullLength/limit)){
        results.next.visible=false
    }

    
    results.results = data.slice(start, end)
    return results
}