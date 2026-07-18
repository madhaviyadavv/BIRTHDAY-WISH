// ===============================
// COUNTDOWN
// ===============================

const countdownTarget = new Date("MAY 22, 2027 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = countdownTarget - now;

    if(distance <= 0){

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);

}

updateCountdown();

setInterval(updateCountdown,1000);


// ===============================
// MUSIC
// ===============================

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function () {

    if (playing) {

        music.pause();

        musicBtn.innerHTML = "▶";

    } else {

        music.play();

        musicBtn.innerHTML = "❚❚";

    }

    playing = !playing;

}


// ===============================
// PHOTO SLIDER
// ===============================

const photos=[

"p1.jpeg",

"p2.jpeg",

"p3.jpeg",
"p4.jpeg",
"p5.jpeg",
"p6.jpeg",
"p7.jpeg", 


];

let current=0;

const heroImage=document.querySelector(".hero-img");

/* setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

heroImage.src=photos[current];

},3000); */


// ===============================
// SURPRISE POPUP
// ===============================

function openGift(){

const gift=document.querySelector(".gift-box");

gift.classList.add("open");

setTimeout(()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸ Pause Music";

}

document.getElementById("birthdayPopup").style.display="flex";

confettiEffect();

fireworks();

},700);

}


// ===============================
// FLOATING HEARTS
// ===============================

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*30)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);


// ===============================
// FALLING PETALS
// ===============================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(5+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*15)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,900);


// ===============================
// BALLOONS
// ===============================

const colors=["red","blue","yellow","purple"];

function createBalloon(){

const balloon=document.createElement("div");

balloon.classList.add("balloon");

balloon.classList.add(colors[Math.floor(Math.random()*colors.length)]);

balloon.style.left=Math.random()*100+"%";

balloon.style.animationDuration=(10+Math.random()*6)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},17000);

}

setInterval(createBalloon,2500);


// ===============================
// SIMPLE CONFETTI
// ===============================

function confettiEffect(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";

confetti.style.height="8px";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=`hsl(${Math.random()*360},100%,60%)`;

confetti.style.zIndex="99999";

confetti.style.borderRadius="50%";

confetti.style.pointerEvents="none";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=`translateY(${window.innerHeight+100}px) rotate(720deg)`;

},50);

setTimeout(()=>{

confetti.remove();

},4500);

}

}


// ===============================
// AUTO PLAY MUSIC AFTER CLICK
// ===============================

function surprise() {

    if (!playing) {
        music.play();
        playing = true;
        musicBtn.innerHTML = "⏸ Pause Music";
    }

    document.getElementById("birthdayPopup").style.display = "flex";

    confettiEffect();
}

//======================
// IMAGE VIEWER
//======================

function openImage(src){

document.getElementById("viewer").style.display="flex";

document.getElementById("viewerImg").src=src;

}

function closeImage(){

document.getElementById("viewer").style.display="none";

}

//=====================
// LOVE LETTER TYPING
//=====================

const message = `
Happy Birthday, My Dear Little Brother! 🎉❤️
You are not just my little brother, you are my biggest happiness and my forever friend. Watching you grow makes me so proud. May your life always be filled with happiness, good health, success, and endless smiles. Keep shining and never stop believing in yourself.
Happy Birthday once again! Love you always! 🤍🎂🎁 🫂✨


MADHAVI❤️

`;

let i = 0;

function typeLetter(){

    if(i < message.length){

        document.getElementById("typingText").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter,45);

    }

}

window.addEventListener("load",typeLetter);

//==========================
// FIREWORK EFFECT
//==========================

function fireworks(){

const area=document.getElementById("fireworks");

for(let i=0;i<180;i++){

const dot=document.createElement("div");

dot.className="firework";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.background=`hsl(${Math.random()*360},100%,60%)`;

dot.style.setProperty("--x",(Math.random()*500-250)+"px");

dot.style.setProperty("--y",(Math.random()*500-250)+"px");

area.appendChild(dot);

setTimeout(()=>{

dot.remove();

},1200);

}

}

//==========================
// STARS
//==========================

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.getElementById("stars").appendChild(star);

}

//=========================
// PAGE LOADER
//=========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1800);

});

//==========================
// CURSOR HEARTS
//==========================

document.addEventListener("mousemove",function(e){

const heart=document.createElement("div");

heart.className="cursor-heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},800);

});

//==========================
// CLICK SPARKLES
//==========================

document.addEventListener("click",function(e){

for(let i=0;i<12;i++){

const s=document.createElement("div");

s.className="spark";

s.style.left=(e.clientX+(Math.random()*40-20))+"px";

s.style.top=(e.clientY+(Math.random()*40-20))+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},600);

}

});