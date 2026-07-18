/* =====================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS PART 1
   CLASSIC FILM WEBSITE
===================================================== */



// ==========================
// WAIT FOR PAGE LOAD
// ==========================


document.addEventListener("DOMContentLoaded", () => {



/* ==========================
   FADE IN PAGE
========================== */


document.body.style.opacity = "0";


setTimeout(() => {


    document.body.style.transition =
    "opacity 1s ease";


    document.body.style.opacity = "1";


},200);








// ==========================
// NAVIGATION BACKGROUND
// ==========================


const navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(navbar){



if(window.scrollY > 80){


navbar.style.background =
"rgba(23,21,18,.92)";


navbar.style.backdropFilter =
"blur(10px)";


navbar.style.padding =
"20px 8%";


}



else{


navbar.style.background =
"transparent";


navbar.style.padding =
"35px 8%";


}



}



});









// ==========================
// SCROLL REVEAL ANIMATION
// ==========================


const revealElements =
document.querySelectorAll(
".photo, .service-card, .about-text, .about-image, .process-card, .booking-box"
);



revealElements.forEach(element=>{


element.style.opacity="0";


element.style.transform=
"translateY(40px)";


element.style.transition=
"all .9s ease";


});






function revealOnScroll(){


revealElements.forEach(element=>{


const position =
element.getBoundingClientRect().top;



const screen =
window.innerHeight;



if(position < screen - 100){



element.style.opacity="1";


element.style.transform=
"translateY(0)";



}



});



}




window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









// ==========================
// IMAGE FADE LOADING
// ==========================



const images =
document.querySelectorAll("img");



images.forEach(image=>{


image.style.opacity="0";


image.style.transition=
"opacity 1s ease";



image.addEventListener(
"load",
()=>{


image.style.opacity="1";


});



if(image.complete){


image.style.opacity="1";


}



});









// ==========================
// SMOOTH SCROLL LINKS
// ==========================


const links =
document.querySelectorAll(
'a[href^="#"]'
);



links.forEach(link=>{


link.addEventListener(
"click",
function(event){



const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


event.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});



});









// ==========================
// BUTTON HOVER EFFECT
// ==========================



const buttons =
document.querySelectorAll(
".button"
);



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


button.style.transform =
"translateY(-5px)";


button.style.boxShadow =
"0 15px 30px rgba(0,0,0,.25)";


});





button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"translateY(0)";


button.style.boxShadow =
"none";


});


});









// ==========================
// BOOKING FORM EFFECTS
// ==========================



const inputs =
document.querySelectorAll(
"input, textarea, select"
);



inputs.forEach(input=>{


input.addEventListener(
"focus",
()=>{


input.style.borderColor =
"#8b6b4a";


input.style.background =
"#ffffff";


});





input.addEventListener(
"blur",
()=>{


input.style.borderColor =
"#ddd";


});


});









// ==========================
// DATE LIMIT
// ==========================



const date =
document.querySelector(
'input[type="date"]'
);



if(date){


let today =
new Date()
.toISOString()
.split("T")[0];



date.min =
today;


}









// ==========================
// FORM SUBMISSION
// ==========================



const form =
document.querySelector(
".professional-form"
);



if(form){


form.addEventListener(
"submit",
(event)=>{


event.preventDefault();



alert(
"Thank you for your inquiry. We will contact you soon."
);



form.reset();



});


}






console.log(
"Front Range Photographic loaded."
);



});

/* =====================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS PART 2
   ADVANCED FILM EFFECTS
===================================================== */





// ==========================
// HERO PARALLAX EFFECT
// ==========================


const heroImage =
document.querySelector(".hero-image");



window.addEventListener(
"scroll",
()=>{


if(heroImage){


let movement =
window.scrollY * 0.25;



heroImage.style.transform =
`scale(1.1) translateY(${movement}px)`;


}



});









// ==========================
// PORTFOLIO IMAGE LIGHTBOX
// ==========================



const galleryImages =
document.querySelectorAll(
".photo img"
);



galleryImages.forEach(image=>{


image.style.cursor =
"pointer";



image.addEventListener(
"click",
()=>{



const lightbox =
document.createElement("div");



lightbox.className =
"lightbox";



lightbox.innerHTML =
`

<div class="lightbox-content">

<img src="${image.src}">

<span>
×
</span>

</div>

`;



document.body.appendChild(
lightbox
);





lightbox.addEventListener(
"click",
()=>{


lightbox.remove();


});



});


});









// ==========================
// ADD LIGHTBOX STYLE
// ==========================


const lightboxStyle =
document.createElement("style");



lightboxStyle.innerHTML = `


.lightbox {

position:fixed;

inset:0;

background:rgba(0,0,0,.9);

display:flex;

align-items:center;

justify-content:center;

z-index:9999;

animation:fade .4s ease;

}



.lightbox img {

max-width:90%;

max-height:90%;

box-shadow:0 30px 80px black;

}



.lightbox span {

position:absolute;

top:40px;

right:50px;

font-size:60px;

color:white;

cursor:pointer;

}



@keyframes fade {

from {

opacity:0;

}

to {

opacity:1;

}

}


`;



document.head.appendChild(
lightboxStyle
);









// ==========================
// TYPING EFFECT
// ==========================



const tagline =
document.querySelector(
".tagline"
);



if(tagline){



const originalText =
tagline.innerText;



tagline.innerText="";



let character=0;



function typeText(){


if(character < originalText.length){


tagline.innerHTML +=
originalText.charAt(character);


character++;


setTimeout(
typeText,
45
);


}


}



setTimeout(
typeText,
800
);



}









// ==========================
// BACK TO TOP BUTTON
// ==========================



const topButton =
document.createElement(
"button"
);



topButton.innerHTML =
"↑";



topButton.className =
"top-button";



document.body.appendChild(
topButton
);





window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 600){


topButton.classList.add(
"show"
);


}

else{


topButton.classList.remove(
"show"
);


}



});





topButton.onclick =
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};









// ==========================
// BACK BUTTON STYLE
// ==========================



const topStyle =
document.createElement(
"style"
);



topStyle.innerHTML = `


.top-button {


position:fixed;


right:35px;


bottom:35px;


width:55px;


height:55px;


border-radius:50%;


border:none;


background:#171512;


color:white;


font-size:25px;


cursor:pointer;


opacity:0;


pointer-events:none;


transition:.4s;


z-index:999;


}



.top-button.show {


opacity:1;


pointer-events:auto;


}



.top-button:hover {


background:#8b6b4a;


transform:translateY(-5px);


}


`;



document.head.appendChild(
topStyle
);









// ==========================
// NUMBER ANIMATION
// ==========================



const numbers =
document.querySelectorAll(
".number"
);



numbers.forEach(number=>{


let target =
parseInt(
number.innerText
);



number.innerText =
"0";



let count=0;



function increase(){



if(count < target){


count++;


number.innerText =
count;


setTimeout(
increase,
40
);


}



}



increase();



});









// ==========================
// FILM GRAIN MOVEMENT
// ==========================



const grain =
document.createElement(
"div"
);



grain.className =
"film-grain";



document.body.appendChild(
grain
);



const grainStyle =
document.createElement(
"style"
);



grainStyle.innerHTML = `


.film-grain {


position:fixed;


inset:0;


pointer-events:none;


opacity:.04;


z-index:9998;


background-image:url("images/grain.png");


animation:grainMove .2s infinite;


}



@keyframes grainMove {


0% {

transform:translate(0,0);

}


25% {

transform:translate(5px,-5px);

}


50% {

transform:translate(-5px,5px);

}


75% {

transform:translate(5px,5px);

}


100% {

transform:translate(0,0);

}


}


`;



document.head.appendChild(
grainStyle
);









// ==========================
// PAGE READY MESSAGE
// ==========================



window.addEventListener(
"load",
()=>{


console.log(
"Front Range Photographic experience ready."
);



});

/* =====================================================
   FRONT RANGE PHOTOGRAPHIC
   CINEMATIC EXPERIENCE ENGINE
   ADVANCED VERSION

   ADD BELOW EXISTING SCRIPT.JS
===================================================== */


document.addEventListener("DOMContentLoaded", () => {



/* =====================================================
   ELEMENT CONNECTIONS
===================================================== */


const intro =
document.querySelector("#intro-screen");


const title =
document.querySelector("#typewriter");


const subtitle =
document.querySelector("#subtitle");


const hero =
document.querySelector(".hero");


const heroContent =
document.querySelector(".hero-content");


const navbar =
document.querySelector(".navbar");


const cursor =
document.querySelector(".cursor");


const skip =
document.querySelector("#skipIntro");






/* =====================================================
   BRAND TEXT
===================================================== */


const brandName =
"FRONT RANGE PHOTOGRAPHIC";


const brandSubtitle =
"CAPTURING COLORADO STORIES THROUGH TIMELESS IMAGERY";





/* =====================================================
   HUMAN TYPEWRITER EFFECT
===================================================== */


function humanType(element,text,speed,done){


    if(!element) return;


    element.innerHTML="";


    let letter=0;



    function write(){


        if(letter < text.length){



            element.innerHTML +=
            text.charAt(letter);



            letter++;



            let randomSpeed =
            speed +
            Math.random()*70;



            setTimeout(
                write,
                randomSpeed
            );



        }

        else{


            if(done){

                done();

            }


        }


    }


    write();


}







/* =====================================================
   INTRO SEQUENCE
===================================================== */


function beginExperience(){


    humanType(

        title,

        brandName,

        75,

        ()=>{


            setTimeout(()=>{


                humanType(

                    subtitle,

                    brandSubtitle,

                    45,

                    ()=>{


                        setTimeout(()=>{


                            revealWebsite();


                        },1200);


                    }

                );


            },700);



        }

    );

}



beginExperience();







/* =====================================================
   REVEAL MAIN WEBSITE
===================================================== */


function revealWebsite(){


    if(!intro)
    return;



    intro.style.transition =
    "all 1.8s cubic-bezier(.77,0,.18,1)";


    intro.style.opacity="0";


    intro.style.transform=
    "scale(1.08)";



    setTimeout(()=>{


        intro.style.display="none";


        if(hero){

            hero.style.opacity="1";

        }


        if(heroContent){


            heroContent.style.animation =
            "heroReveal 2s ease forwards";


        }



    },1800);



}







/* =====================================================
   SKIP INTRO
===================================================== */


if(skip){


    skip.addEventListener(
        "click",
        ()=>{


            revealWebsite();


        }

    );


}







/* =====================================================
   NAVBAR PREMIUM EFFECT
===================================================== */


window.addEventListener(
"scroll",
()=>{


    if(!navbar)
    return;



    if(window.scrollY > 100){


        navbar.style.background =
        "rgba(18,13,8,.92)";


        navbar.style.border =
        "1px solid rgba(214,155,61,.35)";


        navbar.style.boxShadow =
        "0 20px 60px rgba(0,0,0,.35)";



    }

    else{


        navbar.style.background =
        "rgba(255,255,255,.08)";


        navbar.style.boxShadow =
        "none";


    }



});








/* =====================================================
   MOUSE PARALLAX HERO
===================================================== */


document.addEventListener(
"mousemove",
(e)=>{


    const x =
    (e.clientX /
    window.innerWidth -
    .5);



    const y =
    (e.clientY /
    window.innerHeight -
    .5);



    if(hero){


        hero.style.backgroundPosition =
        `${50+x*3}% ${50+y*3}%`;


    }



});








/* =====================================================
   IMAGE FADE IN
===================================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.addEventListener(
    "load",
    ()=>{


        img.style.opacity="1";


        img.style.transform=
        "scale(1)";



    });



    img.style.opacity="0";


    img.style.transform=
    "scale(1.05)";


    img.style.transition=
    "all 1.2s ease";



});







/* =====================================================
   PORTFOLIO HOVER DEPTH
===================================================== */


const cards =
document.querySelectorAll(".photo-card");



cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    (e)=>{


        let rect =
        card.getBoundingClientRect();



        let x =
        e.clientX -
        rect.left;



        let y =
        e.clientY -
        rect.top;



        let rotateX =
        (y -
        rect.height/2)
        /20;



        let rotateY =
        (rect.width/2 -
        x)
        /20;



        card.style.transform =
        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;



    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform=
        "rotateX(0) rotateY(0) scale(1)";


    });



});







/* =====================================================
   SMOOTH BUTTON INTERACTION
===================================================== */


const buttons =
document.querySelectorAll(
".primary-button, .secondary-button, .cta-button"
);



buttons.forEach(button=>{


    button.addEventListener(
    "mouseenter",
    ()=>{


        button.style.letterSpacing =
        "5px";


    });



    button.addEventListener(
    "mouseleave",
    ()=>{


        button.style.letterSpacing =
        "4px";


    });



});

   // Replace inspection wording with roof photographer wording

document.body.innerHTML = document.body.innerHTML
.replace(/inspections/gi, "roof photography")
.replace(/inspection/gi, "roof photography");


});

// Fix duplicated roof photography text

document.body.innerHTML = document.body.innerHTML
.replace(/Roof roof photography/gi, "Roof Photography")
.replace(/Professional Roof photography/gi, "Professional Roof Photography");

// Hide header banner when scrolling

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = "translateY(-120%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;

});

// Fix duplicated roof photography words

document.body.innerHTML = document.body.innerHTML
.replace(/Roof roof photography/gi, "Roof Photography")
.replace(/Professional Roof roof photography/gi, "Professional Roof Photography");
