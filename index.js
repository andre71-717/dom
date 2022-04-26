// Ստեղծել մեկ հատ div ` «մուտք», կողքը մի փոքր եռանկյուն կոճակ, կոճակին կամ div-ին սեղմելիս պիտի հայտնվի մուտքի ֆորմա, երկրորդ անգամ սեղմելիս այդ պիտի ֆորման անհայտանա։


let clickToDropDown = document.getElementsByClassName("enter")[0]

let myDropDown = document.getElementsByClassName("login_format")[0]

let myArrowDown = document.getElementsByClassName("my_button_down")[0]



clickToDropDown.addEventListener('click', function(){
    myDropDown.classList.toggle("myDisplayBlock")
    // myArrowDown.classList.toggle("my_button_up")
    if(myArrowDown){
        myArrowDown.classList.replace("my_button_down", "my_button_up")
    }else{
        myArrowDown.classList.replace("my_button_up", "my_button_down")

    }

})


// ունենալ մի հատ լամպի նկար, վրան սեղմելուց հետո լույսը միանա

function switchOn(){
    document.getElementById("myLampOff").src='lampOn.png'
}

function switchOff(){
    document.getElementById("myLampOff").src='LampOff.png'
}


//or

let MyLamp = document.getElementsByClassName("Lampushka")[0]

let MyLamp_2 = document.getElementsByClassName("Lampushka2")[0]

MyLamp.addEventListener('click', function(){

    MyLamp.classList.toggle("Lampushka2")
    MyLamp_2.style.display = "block"


})

// or

let btn = document.getElementById("toggleBtn")
let lamp = document.getElementById("lamp")
btn.addEventListener('click', function(){
    if(btn.textContent.includes('On')){
        lamp.src = "LampOn.png"
        btn.textContent = "Turn Off"
        btn.style.cursor = "pointer"
    }else{
        lamp.src = "LampOff.png"
        btn.textContent = "Turn On"
        btn.style.cursor = "pointer"
    }
})


// Now անունով button, որի վրա սեղմելուց հայտնվի տվյալ պահի ամսաթիվը հետևյալ ֆորմատով՝(17 Feb, 2014)

let newdate = new Date().toLocaleDateString('en-us',{day:'numeric', month:'short', year:'numeric'}) 

let datetext = newdate

document.getElementById('date').innerHTML = datetext 


let todaysData = document.getElementsByClassName("data")[0]

let myP = document.getElementById('date')

todaysData.addEventListener('click', function(){

    myP.style.display = "block"
    todaysData.style.display = "none"
    
})


// Ստեղծել նկարների սլայդեր

// let myLeftArrow = document.getElementById("left")
// let myRightArrow = document.getElementById("right")
// let mySuperImages = document.getElementsByClassName("mySuperImages")[0]

// myLeftArrow.addEventListener('click', function(){
//     mySuperImages.src = "ironman.jpg"
// })

let slideIndex = [1];
let slideId = ["mySlides1"]
showSlides(1, 0);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
