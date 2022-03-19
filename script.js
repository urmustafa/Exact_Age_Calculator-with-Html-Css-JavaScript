
const years=document.getElementById("years");
const months=document.getElementById("months");
const days=document.getElementById("days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
const countdown=document.querySelector("#countdown");
// console.log(countdown);

const loading=document.querySelector(".loading");

window.addEventListener('load',()=>{
    loading.style.display="block";
    setTimeout(()=>{
        loading.style.display="none";
        countdown.style.display="flex"
    },1000)

    let h2Elements=document.getElementsByTagName("h2");
    // for(let i=0; i<h2Elements.length;i++){
    //     h2Elements[i].innerHTML="00";
    // }


    // let h2items=countdown.querySelectorAll("h2");
    // h2items.forEach(i => {
    //     i.innerHTML="00";         
    // });

    // Array.from(h2Elements).forEach(i=>{
    //     i.innerHTML="00";

    // })
    [...h2Elements].forEach((item)=>{
        item.innerHTML="00"
    })
})

let birthday=document.querySelector("input[name=birthday]");
let selectedBirthday=new Date();
console.log(typeof selectedBirthday)
birthday.addEventListener("change",(e)=>{
    console.log(e.target.value);
    selectedBirthday=new Date(e.target.value);
    if(selectedBirthday > new Date){
        alert("Doğum Tarihiniz Bugünden Büyük Olamaz")
        return;
    }
    document.body.style.backgroundImage="url('./img/back.jpg')";
    loading.style.display="block";
    setInterval(loadCountDown,1000);
    setTimeout(()=>{
        loading.style.display="none";
    })
})

const loadCountDown=()=>{
    let dbyear=selectedBirthday.getFullYear();
    let dbmonth=selectedBirthday.getMonth();
    let dbdate=selectedBirthday.getDate();
    let dbhour=selectedBirthday.getHours();
    let dbminute=selectedBirthday.getMinutes();
    let dbsecond=selectedBirthday.getSeconds();

    let now=new Date();

    let currentyear=now.getFullYear();
    let currentmonth=now.getMonth();
    let currentday=now.getDate();
    let currenthour=now.getHours();
    let currentminute=now.getMinutes();
    let currentsecond=now.getSeconds();

    let ageyear=currentyear - dbyear;
    let agemonth=currentmonth-dbmonth;
    let ageday=currentday-dbdate;
    let agehour=currenthour-dbhour;
    let ageminute=currentminute-dbminute;
    let agesecond=currentsecond-dbsecond;

   
    if(agesecond<0){
        ageminute--;
        agesecond+=60;
    }
    if(ageminute<0){
        agehour--;
        ageminute+=60;
    }
    if(agehour<0){
        ageday--;
        agehour+=24;
    }
    if(ageday<0){
        agemonth--;
        ageday+=30;
    }
    if(agemonth<0){
        ageyear--;
        agemonth=agemonth+12;
    }

    years.innerHTML=ageyear.toString().padStart(2,"0");
    months.innerHTML=agemonth.toString().padStart(2,"0");
    days.innerHTML=ageday.toString().padStart(2,"0");
    hours.innerHTML=agehour.toString().padStart(2,"0");
    minutes.innerHTML=ageminute.toString().padStart(2,"0");
    seconds.innerHTML=agesecond.toString().padStart(2,"0");


}

console.log(selectedBirthday)