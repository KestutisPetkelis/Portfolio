
// 11-30 Portfolio

const asideBtn = document.querySelectorAll(".asidediv")
const main = document.querySelector(".main")
const content = document.querySelectorAll(".content")
let indexContent 


asideBtn.forEach((x, index) =>
x.onclick =(e) =>{
    
    for(i=0; i<asideBtn.length; i++) {
        asideBtn[i].style.backgroundColor = "" // nusiimam mygtuko paspaudimo zymekli
        
    }
        x.style.backgroundColor = "#FF014F" // uzdedam paspaudimo zymekli ant paspausto mygtuko
        indexContent = index
        content.forEach((x, index) =>{      // pasirenkam kuri kontenta rodyti pgl paspaudima
            if (indexContent === index){
                x.style.display = "flex"
            }else{
                x.style.display ="none"
            }
        })                                              
    console.log("click")
 
}
)

