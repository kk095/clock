let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hr = document.getElementById('hr');
const deg = 6;
let body=document.querySelector('body')
let mode=document.getElementById('mode')
let cls=body.classList
mode.addEventListener('click',()=>{
    if(cls =='light'){
        body.classList.remove('light');
    }
    else{
        body.classList.add('light');
    }
})

    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;
        sec.style.transform = `rotateZ(${ss}deg)`;
        min.style.transform = `rotateZ(${mm}deg)`;
        hr.style.transform = `rotateZ(${hh}deg)`;
    }, 1000);
