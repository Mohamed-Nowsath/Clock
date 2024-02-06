const hour=document.querySelector(".hrs")
const minute=document.querySelector(".mins")
const second=document.querySelector(".secs")


setInterval(runclock,1000);

function runclock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hr=(min+time.getHours())/12;
    hour.style.setProperty('--rotation',hr*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);
}
runclock()