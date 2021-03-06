
// 11-30 Portfolio

const asideBtn = document.querySelectorAll(".asidediv")
const main = document.querySelector(".main")
const content = document.querySelectorAll(".content")
let indexContent 

const card = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")
const modalexit = document.querySelector(".modalexit")

const button = document.querySelector("button")

const greyColor = document.querySelectorAll(".greycolor")
const colorWhite = document.querySelectorAll(".colorwhite")
const colorBlack = document.querySelectorAll(".colorblack")

const bColorWhite = document.querySelectorAll(".bcolorwhite")
const bColorWht = document.querySelectorAll(".bcolorwht")
const bColorEee = document.querySelectorAll(".bcoloreee")
const bColorIcon = document.querySelectorAll(".bcoloricon")
const bColorDarkDr = document.querySelectorAll(".bcolordarkgr")

const boxShadow = document.querySelectorAll(".boxshadow")

const borderTopGrey = document.querySelectorAll(".bordertopgrey")
const borderColorEee = document.querySelectorAll(".bordercoloreee")
const borderRcolorEee = document.querySelectorAll(".borderRcoloreee")
const lBorderLcolorEee = document.querySelectorAll(".l-borderLcoloreee")

let lightColor = true


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
button.onclick = () =>{
    console.log("color")
    if (lightColor){
        greyColor.forEach(x => x.classList.add("d-greycolor"))
        colorWhite.forEach(x => x.classList.add("d-colorwhite"))
        colorBlack.forEach(x => x.classList.add("d-colorblack"))

        bColorWhite.forEach(x => x.classList.add("d-bcolorwhite"))
        bColorWht.forEach(x => x.classList.add("d-bcolorwht"))
        bColorEee.forEach(x => x.classList.add("d-bcoloreee"))
        bColorIcon.forEach(x => x.classList.add("d-bcoloricon"))
        bColorDarkDr.forEach(x => x.classList.add("d-bcolordarkgr"))

        boxShadow.forEach(x => x.classList.add("d-boxshadow"))

        borderTopGrey.forEach(x => x.classList.add("d-bordertopgrey"))
        borderColorEee.forEach(x => x.classList.add("d-bordercoloreee"))
        borderRcolorEee.forEach(x => x.classList.add("d-borderRcoloreee"))
        lBorderLcolorEee.forEach(x => x.classList.add("d-l-borderLcoloreee"))
    } else{
        greyColor.forEach(x => x.classList.remove("d-greycolor"))
        colorWhite.forEach(x => x.classList.remove("d-colorwhite"))
        colorBlack.forEach(x => x.classList.remove("d-colorblack"))

        bColorWhite.forEach(x => x.classList.remove("d-bcolorwhite"))
        bColorWht.forEach(x => x.classList.remove("d-bcolorwht"))
        bColorEee.forEach(x => x.classList.remove("d-bcoloreee"))
        bColorIcon.forEach(x => x.classList.remove("d-bcoloricon"))
        bColorDarkDr.forEach(x => x.classList.remove("d-bcolordarkgr"))

        boxShadow.forEach(x => x.classList.remove("d-boxshadow"))

        borderTopGrey.forEach(x => x.classList.remove("d-bordertopgrey"))
        borderColorEee.forEach(x => x.classList.remove("d-bordercoloreee"))
        borderRcolorEee.forEach(x => x.classList.remove("d-borderRcoloreee"))
        lBorderLcolorEee.forEach(x => x.classList.remove("d-l-borderLcoloreee"))
    }
    lightColor = !lightColor
}

card.forEach(x =>{
    x.onclick = () =>{
        modal.style.display = "flex"
        modalexit.onclick = () => modal.style.display = "none"
    }
})