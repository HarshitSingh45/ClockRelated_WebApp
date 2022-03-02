var btn = document.getElementById('btn');
var input=document.getElementById('ip');
var counter=document.getElementById('counter1');
var reset=document.getElementById('rst');
var pause = document.getElementById('pause');
var play = document.getElementById('play');
var stp = document.getElementById('stop');
var interval;
var count, count1, count2, count3;
var isPaused = false;
reset.onclick=function(){
    document.location.reload();
}
var limit;

play.style.display = 'none';
pause.style.display = 'none';
stp.style.display = 'none';

stp.addEventListener('click',function(e){
    alert('Stopwatch Stopped');
    play.style.display = 'none';
    pause.style.display = 'none';
    e.preventDefault();
    isPaused = true;
})


pause.addEventListener('click', function(e){
    play.style.display = 'inline-block';
    pause.style.display = 'none';
    e.preventDefault();
    isPaused = true;
})
play.addEventListener('click', function(e){
    play.style.display = 'none';
    pause.style.display = 'inline-block';
    e.preventDefault();
    isPaused = false;
})
btn.addEventListener('click',timer);
var maincount=0;
function timer(){
    btn.style.display = 'none';
    pause.style.display = "inline-block";
    stp.style.display = "inline-block";
    count=1;
    interval = setInterval(function(){
        if(!isPaused){
            maincount++;
            if(count>9){
                count=0;
                timer2();
            }
            counter.textContent=count;
            count++;
        }  
    },100);
}
count2=1;
function timer2(){
    if(count2 == 6){
        count2=0;
        timer3();
    }
    document.getElementById('counter2').textContent=count2;
    count2++;  
}
count3=1;
function timer3(){
    if(count3>9){
        count3=0;
        timer4();
    }
    document.getElementById('counter3').textContent=count3;
    count3++;
}
count4=1;
function timer4(){
    if(count4 == 6){
        count4=0;
        return;
    }
    document.getElementById('counter4').textContent=count4;
    count4++;
}