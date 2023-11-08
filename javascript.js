let inputCheck = document.querySelector(".toggle")
const labelButton = document.querySelector(".button")
const bodyBgrc = document.querySelector("body")
const titleDarkMode = document.querySelector(".dark-title")

inputCheck.addEventListener("change", ()=>{
    if (inputCheck.checked){
        console.log("checked")
        bodyBgrc.classList.add("active")
        titleDarkMode.style.color = "white"
    }
    else{
        
        console.log("not checked")
        bodyBgrc.classList.remove("active")
        titleDarkMode.style.color = "black"
    }
    
    
});
