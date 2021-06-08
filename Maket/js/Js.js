const burger =document.querySelector(".plates")
const dropDownPointMessager =document.querySelector(".dropdownpointmessager")
const allDialogsItems =document.querySelectorAll(".alldialogsitem")
const messages =document.querySelectorAll(".message")



burger.addEventListener("click", ()=>{

dropDownPointMessager.classList.toggle("active")

})


allDialogsItems.forEach(item =>{

    item.addEventListener("click", (e)=>{
    
        allDialogsItems.forEach(item =>{
            item.classList.remove("active")
        })
        item.classList.add("active")
    } ) 
})

messages.forEach(item =>{
    
    if (item.innerHTML.length > 29){
        
        item.innerHTML = item.innerHTML.slice(0,29) + "..."
        
    }

})