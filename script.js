// =====================================
// DATE INVITATION WEBSITE
// =====================================

// ---------- Envelope ----------

function openEnvelope(){

const loading=document.getElementById("loading");

loading.classList.add("hideLoading");

setTimeout(()=>{

loading.style.display="none";

},1000);

}



// ---------- Go Next ----------

function goNext(){

document.body.classList.add("fadeOut");

setTimeout(()=>{

window.location.href="date.html";

},700);

}



// ---------- Secret Flower ----------

function secretMessage(){

alert(`🌸

You found the secret!

Every click you make
makes me smile a little more.

❤️`);

}



// ---------- Music ----------

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

function toggleMusic(){

if(!music) return;

if(!playing){

music.play();

musicBtn.innerHTML="⏸";

playing=true;

}

else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

}



// ---------- NO Button ----------

const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseenter",()=>{

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

}



// ---------- Floating Hearts ----------

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,600);



// ---------- Falling Roses ----------

function createRose(){

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.fontSize=(18+Math.random()*18)+"px";

rose.style.animationDuration=(7+Math.random()*5)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},12000);

}

setInterval(createRose,1200);
// =====================================
// SPARKLES
// =====================================

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*window.innerWidth+"px";

    s.style.top=Math.random()*window.innerHeight+"px";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(createSparkle,500);


// =====================================
// CURSOR HEART
// =====================================

document.addEventListener("mousemove",(e)=>{

    const h=document.createElement("div");

    h.className="cursorHeart";

    h.innerHTML="💖";

    h.style.left=e.clientX+"px";

    h.style.top=e.clientY+"px";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },1000);

});


// =====================================
// DATE PAGE
// =====================================

function saveDate(){

    const date=document.getElementById("datePicker").value;

    const time=document.getElementById("timePicker").value;

    if(date==="" || time===""){

        alert("Please select date and time ❤️");

        return;

    }

    localStorage.setItem("date",date);

    localStorage.setItem("time",time);

    window.location.href="food.html";

}


// =====================================
// FOOD PAGE
// =====================================

function saveFood(){

    const checked=document.querySelectorAll("input[type='checkbox']:checked");

    let foods=[];

    checked.forEach(item=>{

        foods.push(item.value);

    });

    localStorage.setItem("foods",JSON.stringify(foods));

    window.location.href="final.html";

}


// =====================================
// FINAL PAGE
// =====================================

window.onload=function(){

    const result=document.getElementById("result");

    if(result){

        const date=localStorage.getItem("date");

        const time=localStorage.getItem("time");

        const foods=JSON.parse(localStorage.getItem("foods"))||[];

        result.innerHTML=`
        <h2>💕 Our Date Plan 💕</h2>

        <br>

        📅 <b>Date:</b> ${date}

        <br><br>

        🕒 <b>Time:</b> ${time}

        <br><br>

        🍕 <b>Food:</b> ${foods.join(", ")}

        <br><br>

        <h2 style="color:#ff4f87;">
        I Can't Wait To See You ❤️
        </h2>
        `;
    }

};


// =====================================
// ENTER KEY
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        const yes=document.querySelector(".yes");

        if(yes){

            yes.click();

        }

    }

});  
// Firebase config (এখানে তোমার নিজেরটা বসাবে)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function sendAnswer(answer) {
  db.collection("responses").add({
    answer: answer,
    time: new Date().toISOString()
  })
  .then(() => {
    console.log("Saved:", answer);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
