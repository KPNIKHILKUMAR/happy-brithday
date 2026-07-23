/* ==========================================================
   HAPPY BIRTHDAY NANDINI ❤️
   SCRIPT.JS - PART 1
   BASIC FUNCTIONS
========================================================== */


/* ==========================
   AOS INITIALIZATION
========================== */

AOS.init({

    duration:1200,

    once:true,

    easing:"ease-out-cubic"

});



/* ==========================
   PAGE LOADER
========================== */


window.addEventListener("load",()=>{


    setTimeout(()=>{


        const loader=document.getElementById("loader");


        loader.style.opacity="0";


        setTimeout(()=>{


            loader.style.display="none";


        },1000);



    },3000);


});



/* ==========================
   BACKGROUND MUSIC
========================== */


const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");


let isPlaying=false;



musicBtn.addEventListener("click",()=>{


    if(!isPlaying){


        music.play();


        musicBtn.innerHTML=

        '<i class="fa-solid fa-pause"></i>';


        isPlaying=true;


    }

    else{


        music.pause();


        musicBtn.innerHTML=

        '<i class="fa-solid fa-music"></i>';


        isPlaying=false;


    }


});



/* ==========================
   START JOURNEY BUTTON
========================== */


const startBtn=

document.getElementById("startJourney");



if(startBtn){


startBtn.addEventListener("click",()=>{


    document.querySelector(".birthday")

    .scrollIntoView({


        behavior:"smooth"


    });



    if(music.paused){


        music.play();


        isPlaying=true;


        musicBtn.innerHTML=

        '<i class="fa-solid fa-pause"></i>';


    }


});


}



/* ==========================
   OPEN LETTER
========================== */


const openLetter=

document.getElementById("openLetter");


const letterPaper=

document.querySelector(".letter-paper");



if(openLetter){


openLetter.addEventListener("click",()=>{


    letterPaper.style.display="block";


    openLetter.style.display="none";


});


}



/* ==========================
   SWIPER GALLERY
========================== */


const swiper=new Swiper(".mySwiper",{


    loop:true,


    grabCursor:true,


    centeredSlides:true,


    slidesPerView:1,


    spaceBetween:40,


    autoplay:{


        delay:3000,


        disableOnInteraction:false


    },


    effect:"coverflow",


    coverflowEffect:{


        rotate:30,


        stretch:0,


        depth:200,


        modifier:1,


        slideShadows:true


    },


    breakpoints:{


        768:{


            slidesPerView:2


        },


        1100:{


            slidesPerView:3


        }


    }


});



/* ==========================
   CUSTOM CURSOR
========================== */


const cursor=document.querySelector(".cursor");

const cursor2=document.querySelector(".cursor2");



document.addEventListener("mousemove",(e)=>{


    if(cursor){


        cursor.style.left=

        e.clientX+"px";


        cursor.style.top=

        e.clientY+"px";


    }



    if(cursor2){


        cursor2.style.left=

        e.clientX+"px";


        cursor2.style.top=

        e.clientY+"px";


    }


});



/* ==========================
   BUTTON HOVER EFFECT
========================== */


const buttons=document.querySelectorAll("button");



buttons.forEach(btn=>{


btn.addEventListener("mouseenter",()=>{


    if(cursor){


        cursor.style.transform=

        "scale(2)";


    }


});



btn.addEventListener("mouseleave",()=>{


    if(cursor){


        cursor.style.transform=

        "scale(1)";


    }


});


});



/* ==========================
   SMOOTH REVEAL
========================== */


const revealElements=

document.querySelectorAll(".fade-up");



const revealObserver=

new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



revealElements.forEach(el=>{


revealObserver.observe(el);


});
/* ==========================================================
   HAPPY BIRTHDAY NANDINI ❤️
   SCRIPT.JS - PART 2
   INTERACTIVE CELEBRATION
========================================================== */


/* ==========================
   BLOW CANDLES
========================== */


const blowBtn = document.getElementById("blowCandles");


if(blowBtn){


blowBtn.addEventListener("click",()=>{


    const flames=document.querySelectorAll(".flame");


    flames.forEach(flame=>{


        flame.style.opacity="0";


        flame.style.transform=

        "translateX(-50%) scale(0)";


    });



    blowBtn.innerHTML=

    "🎉 Wish Granted ❤️";



    createFireworks();



});


}



/* ==========================
   GIFT BOX
========================== */


const giftBox=document.getElementById("giftBox");

const giftBtn=document.getElementById("openGift");

const giftMessage=document.getElementById("giftMessage");



if(giftBtn){


giftBtn.addEventListener("click",()=>{


    giftBox.classList.add("open");


    giftMessage.style.display="block";


    giftBtn.innerHTML=

    "💖 Surprise Opened";


    createFireworks();


});


}



/* ==========================
   CONFETTI FIREWORKS
========================== */


function createFireworks(){



if(typeof confetti==="function"){



confetti({


particleCount:200,


spread:160,


origin:{


x:Math.random(),


y:.5


}


});



confetti({


particleCount:120,


spread:100,


origin:{


x:.5,


y:.3


}


});



}



}



/* ==========================
   FLOATING HEARTS
========================== */


function createHeart(){


const heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=

Math.random()*100+"vw";



heart.style.fontSize=

(20+Math.random()*30)+"px";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createHeart,900);




/* ==========================
   FALLING FLOWERS
========================== */


const flowers=[

"🌸",

"🌹",

"🌺",

"🌷",

"🌼"

];



function createFlower(){


const flower=document.createElement("div");


flower.className="flower";


flower.innerHTML=

flowers[

Math.floor(Math.random()*flowers.length)

];



flower.style.left=

Math.random()*100+"vw";



flower.style.fontSize=

(20+Math.random()*30)+"px";



document.body.appendChild(flower);



setTimeout(()=>{


flower.remove();


},10000);



}



setInterval(createFlower,1500);




/* ==========================
   BUTTERFLIES
========================== */


function createButterfly(){


const butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.top=

Math.random()*80+"vh";



butterfly.style.left=

"-50px";



document.body.appendChild(butterfly);



setTimeout(()=>{


butterfly.remove();


},12000);



}



setInterval(createButterfly,4000);




/* ==========================
   SPARKLES
========================== */


function createSparkle(){


const sparkle=document.createElement("div");


sparkle.className="sparkle";


sparkle.innerHTML="✨";


sparkle.style.left=

Math.random()*100+"vw";



sparkle.style.top=

Math.random()*100+"vh";



document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();


},2000);



}



setInterval(createSparkle,500);




/* ==========================
   GOLD PARTICLES
========================== */


function createGoldParticle(){


const particle=document.createElement("div");


particle.className="gold-particle";


particle.style.left=

Math.random()*100+"vw";



particle.style.bottom="-20px";



document.body.appendChild(particle);



setTimeout(()=>{


particle.remove();


},8000);



}



setInterval(createGoldParticle,300);




/* ==========================
   SHOOTING STARS
========================== */


function createShootingStar(){


const star=document.createElement("div");


star.className="shooting-star";


star.style.left=

Math.random()*70+"vw";



star.style.top=

Math.random()*30+"vh";



document.getElementById("shooting-stars")

.appendChild(star);



setTimeout(()=>{


star.remove();


},3000);



}



setInterval(createShootingStar,4000);
