const options = document.querySelectorAll(".select");

const selectionTitle = document.getElementById("selectionTitle");
const selectionPara = document.getElementById("selectionPara");

const titles = ["Bookmark in one click", "Intelligent search", "Share your bookmarks"];
const paras = ["Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.", "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."]

for (let x = 0; x < options.length; x++){
    options[x].addEventListener("click", ()=>{
        options.forEach(option =>{
            option.id = "";
        })
        options[x].id = "on";
        selectionTitle.innerHTML = titles[x]
        selectionPara.innerHTML = paras[x]
    })
}

const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");
let opened = [false, false, false, false]


for (let x = 0; x < arrows.length; x++){
    arrows[x].addEventListener("click", ()=>{
        console.log("click");
        if(opened[x] == false){
            answers[x].style.display = "block";
            opened[x] = true;
            console.log(opened);
            arrows[x].style.transform = 'rotate(180deg)';
        }
        else{
            answers[x].style.display = "none";
            opened[x] = false;
            console.log(opened);
            arrows[x].style.transform = 'rotate(0deg)';
        }
    })
}

const contact = document.getElementById("contact");

contact.addEventListener("click", ()=>{
    let emailInput = document.getElementById("emailInput");
    let error = document.getElementById("error");

    if(!emailInput.value.includes("@") && !emailInput.value.includes(".")){
        emailInput.style.border = "hsl(0, 94%, 66%) 2px solid";
        emailInput.style.borderBottomLeftRadius = "0";
        emailInput.style.borderBottomRightRadius = "0";
        error.style.display = "block"
    }
    else{
        emailInput.style.border = "border: white 6px solid;";
        emailInput.style.borderBottomLeftRadius = "5px";
        emailInput.style.borderBottomRightRadius = "5px";
        error.style.display = "none"
    }
})

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const cross = document.getElementById("cross");
console.log(cross)

hamburger.addEventListener("click", ()=>{
    menu.style.display = "block";
})

cross.addEventListener("click", ()=>{
    menu.style.display = "none";
})