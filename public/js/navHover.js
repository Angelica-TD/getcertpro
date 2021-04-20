const openDropdown = document.querySelector(".certs")
const dropMenu = document.querySelector(".dropdown-container")
// console.log(openDropdown)
openDropdown.addEventListener('mouseover',(e)=>{
        dropMenu.style.display = "flex"
        // console.dir(e)
})

// openDropdown.addEventListener('mouseleave',(e)=>{
//     dropMenu.style.display = "flex"
//     dropMenu.style.display = "none"
// })

openDropdown.addEventListener('mouseout', (e)=>{
    dropMenu.style.display = "none"
})